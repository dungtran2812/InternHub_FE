import { degrees, PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { saveAs } from 'file-saver';

// Convert SVG to PNG using canvas
const svgToPng = async (svgPath, color = '#006400', size = 24) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
        <path d="${svgPath}"/>
      </svg>
    `;

    const img = new Image();
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
      canvas.toBlob((pngBlob) => {
        URL.revokeObjectURL(url);
        resolve(pngBlob);
      }, 'image/png');
    };

    img.onerror = (error) => {
      URL.revokeObjectURL(url);
      reject(error);
    };

    img.src = url;
  });
};

// Define icons as SVG paths
const ICONS = {
  phone: 'M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z',
  email: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  link: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
  location: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
};

export const generatePDF = async (cv, combinedData) => {
  const {
    certificates,
    education,
    experience,
    honorsAndAwards,
    personalInfo,
    skills
  } = cv
  const pdfDoc = await PDFDocument.create();
  const fontBytes = await fetch('/roboto-regular.ttf').then(res => res.arrayBuffer())
  const fontBoldBytes = await fetch('/roboto-bold.ttf').then(res => res.arrayBuffer())
  pdfDoc.registerFontkit(fontkit)
  const regularFont = await pdfDoc.embedFont(fontBytes)
  const boldFont = await pdfDoc.embedFont(fontBoldBytes)
  const page = pdfDoc.addPage([595, 842]); // A4 size
  const { height } = page.getSize();

  // Helper functions
  const drawText = (text, x, y, { size = 11, isBold = false, color = rgb(0, 0, 0) } = {}) => {
      if (!text) return;
      
      try {
          page.drawText(text, {
              x,
              y: height - y,
              size,
              font: isBold ? boldFont : regularFont,
              color,
              lineHeight: size * 1.2
          });
      } catch (error) {
          console.error('Error drawing text:', text, error);
      }
  };

  // Function to measure text width
  const measureText = (text, size, isTitle = false) => {
      const font = isTitle ? boldFont : regularFont;
      return font.widthOfTextAtSize(text, size);
  };

  // Function to wrap text with proper width calculation
  const wrapText = (text, maxWidth, x, y, options = {}) => {
      if (!text) return 0;
      
      const words = text.split(' ');
      let line = '';
      let lineY = 0;
      const fontSize = options.size || 11;
      
      words.forEach(word => {
          const testLine = line + word + ' ';
          const testWidth = measureText(testLine, fontSize, options.isBold);
          
          if (testWidth > maxWidth) {
              drawText(line, x, y + lineY, options);
              line = word + ' ';
              lineY += fontSize * 1.5;
          } else {
              line = testLine;
          }
      });
      
      if (line) {
          drawText(line, x, y + lineY, options);
      }
      
      return lineY;
  };

  // Helper function to draw icons
  const drawIcon = async (iconPath, x, y) => {
    try {
      const pngBlob = await svgToPng(iconPath);
      const iconBytes = await pngBlob.arrayBuffer();
      const icon = await pdfDoc.embedPng(iconBytes);
      
      page.drawImage(icon, {
        x,
        y: height - y - 2,
        width: 12,
        height: 12
      });
    } catch (error) {
      console.error('Error drawing icon:', error);
    }
  };

  // Add helper functions for decorative elements
  const drawUnderline = (x, y, width, color = rgb(0, 0, 0)) => {
    page.drawLine({
      start: { x, y: height - y },
      end: { x: x + width, y: height - y },
      thickness: 1,
      color
    });
  };

  const drawSectionDecorator = (x, y, title, size = 13) => {
    // Draw title
    drawText(title, x, y, { size, isBold: true });
    
    // Draw decorative line
    const titleWidth = measureText(title, size, true);
    const lineStartX = x + titleWidth + 10;
    drawUnderline(lineStartX, y + 6, 200, rgb(0.4, 0.4, 0.4));
    
    // Draw small accent line
    drawUnderline(x, y + 12, 30, rgb(0, 0.4, 0));
  };

  // Add helper function for section headers with underline
  const drawSectionHeader = (x, y, title) => {
    drawText(title, x, y, { size: 13, isBold: true });
    // Draw underline
    page.drawLine({
      start: { x, y: height - (y + 5) },
      end: { x: x + 200, y: height - (y + 5) },
      thickness: 1,
      color: rgb(0, 0, 0)
    });
  };

  // Add profile photo
  if (combinedData.avatar) {
      try {
        
          const imageBytes = await fetch(combinedData.avatar).then(res => res.arrayBuffer());
          const image = await pdfDoc.embedJpg(imageBytes);
          const scale = 100 / image.width; // Scale to 100pt width
          page.drawImage(image, {
              x: 40,
              y: height - 180,
              width: 100,
              height: image.height * scale
          });
      } catch (error) {
          console.error('Error loading avatar:', error);
      }
  }

  // Header Section with decoration
  drawText(combinedData.fullname, 170, 60, { size: 20, isBold: true });
  const nameWidth = measureText(combinedData.fullname, 20, true);
  drawUnderline(170, 65, nameWidth, rgb(0, 0.4, 0));
  drawText(cv.jobTitle, 170, 85, { size: 13 });

  // Contact Information with icons
  const contactY = 110;
  const contactX = 190;
  const iconX = 170;

  // Phone
  await drawIcon(ICONS.phone, iconX, contactY);
  drawText(combinedData.phone || "", contactX, contactY, { size: 11 });

  // Email
  await drawIcon(ICONS.email, iconX, contactY + 20);
  drawText(combinedData.email || "", contactX, contactY + 20, { size: 11 });

  // Social Link
  await drawIcon(ICONS.link, iconX, contactY + 40);
  drawText(cv.personalInfo.socialLink || "", contactX, contactY + 40, { size: 11 });

  // Location
  await drawIcon(ICONS.location, iconX, contactY + 60);
  drawText(cv.personalInfo.location || "", contactX, contactY + 60, { size: 11 });

  // Define base Y positions for all sections
  const sectionSpacing = 170; // Space between sections
  const firstSectionY = 210;
  const secondSectionY = firstSectionY + sectionSpacing;
  const thirdSectionY = secondSectionY + sectionSpacing;

  // Left Column (40-280)
  const leftX = 40;
  
  // Skills Section
  drawSectionHeader(leftX, firstSectionY, "SKILLS");
  let skillY = firstSectionY + 40;

  // Technical Skills with bullet styling
  drawText("Technical:", leftX, skillY, { isBold: true });
  skills.hardSkills.forEach((skill, index) => {
    const bulletX = leftX + 10;
    // Draw custom bullet point
    page.drawCircle({
      x: bulletX,
      y: height - (skillY + ((index + 1) * 20)),
      size: 2,
      color: rgb(0, 0.4, 0)
    });
    drawText(skill, bulletX + 10, skillY + ((index + 1) * 20));
  });

  // Soft Skills with different bullet styling
  skillY += (skills.hardSkills.length + 2) * 20;
  drawText("Soft Skills:", leftX, skillY, { isBold: true });
  skills.softSkills.forEach((skill, index) => {
    const bulletX = leftX + 10;
    // Draw diamond bullet point
    page.drawSquare({
      x: bulletX,
      y: height - (skillY + ((index + 1) * 20)),
      size: 3,
      rotation: degrees(45),
      color: rgb(0, 0.4, 0)
    });
    drawText(skill, bulletX + 10, skillY + ((index + 1) * 20));
  });

  // Projects Section
  drawSectionHeader(leftX, secondSectionY, "PROJECTS");
  let projectY = secondSectionY + 40;
  experience.items.forEach((exp, index) => {
    drawText(exp.position, leftX, projectY, { size: 12, isBold: true });
    // Add small accent line under position
    drawUnderline(leftX, projectY + 5, measureText(exp.position, 12, true), rgb(0, 0.4, 0));
    
    // Draw date and company with subtle separator
    const dateText = `${exp.startDate} - ${exp.endDate}`;
    drawText(dateText, leftX, projectY + 20);
    drawText("•", leftX + measureText(dateText, 11) + 5, projectY + 20);
    drawText(exp.companyName, leftX + measureText(dateText, 11) + 15, projectY + 20);
    
    const descriptionHeight = wrapText(
      exp.description,
      230,
      leftX + 10,
      projectY + 45,
      { size: 11 }
    );
    
    projectY += 65 + descriptionHeight;
  });

  // Right Column (300-540)
  const rightX = 300;

  // Education Section
  drawSectionHeader(rightX, firstSectionY, "EDUCATION");
  drawText(education.schoolName, rightX, firstSectionY + 40, { isBold: true });
  drawText(education.major, rightX, firstSectionY + 60);
  drawText(`${education.startDate} - ${education.endDate}`, rightX, firstSectionY + 80);
  const descHeight = wrapText(education.description, 250, rightX, firstSectionY + 100);

  // Certificates Section
  drawSectionHeader(rightX, secondSectionY, "CERTIFICATES");
  let certY = secondSectionY + 40;
  certificates.items.forEach((cert, index) => {
    drawText(cert.title, rightX, certY, { isBold: true });
    drawText(cert.date, rightX, certY + 20);
    // Add subtle separator line
    certY += 50;
  });

  // Honors and Awards Section
  drawSectionHeader(rightX, thirdSectionY, "HONORS & AWARDS");
  let awardY = thirdSectionY + 40;
  honorsAndAwards.items.forEach((award, index) => {
    drawText(award.title, rightX, awardY, { isBold: true });
    drawText(award.date, rightX, awardY + 20);
    // Add subtle separator line
    awardY += 50;
  });

  // Save and download
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const fileName = `${personalInfo.fullName || 'CV'}.pdf`;
  saveAs(blob, fileName);
}