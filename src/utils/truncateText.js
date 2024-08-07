function truncateText(text, maxLength, ellipsis = '...') {
  return text.length > maxLength ? text.substring(0, maxLength - ellipsis.length) + ellipsis : text;
}

export default truncateText;