function ellipsis(lines = 1) {
  const oneLineStyles = `
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  const multipleLineStyles = `
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;

  return lines > 1 ? multipleLineStyles : oneLineStyles;
}

export default ellipsis;
