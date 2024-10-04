// ================================= AccordiOn js============================================
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const minusSVG = `
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" d="M23.75 16.4482H6.25V14.0315H23.75V16.4482Z" fill="black"/>
</svg>

    `;
    const plusSVG = `
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" d="M8.42105 18.6789C8.42105 19.0976 8.58741 19.4992 8.88352 19.7953C9.17963 20.0915 9.58124 20.2578 10 20.2578C10.4188 20.2578 10.8204 20.0915 11.1165 19.7953C11.4126 19.4992 11.5789 19.0976 11.5789 18.6789V11.8368H18.4211C18.8398 11.8368 19.2414 11.6704 19.5375 11.3743C19.8336 11.0782 20 10.6766 20 10.2578C20 9.83905 19.8336 9.43744 19.5375 9.14133C19.2414 8.84522 18.8398 8.67887 18.4211 8.67887H11.5789V1.83676C11.5789 1.418 11.4126 1.01639 11.1165 0.720276C10.8204 0.424165 10.4188 0.257812 10 0.257812C9.58124 0.257812 9.17963 0.424165 8.88352 0.720276C8.58741 1.01639 8.42105 1.418 8.42105 1.83676V8.67887H1.57895C1.16018 8.67887 0.758573 8.84522 0.462463 9.14133C0.166353 9.43744 0 9.83905 0 10.2578C0 10.6766 0.166353 11.0782 0.462463 11.3743C0.758573 11.6704 1.16018 11.8368 1.57895 11.8368H8.42105V18.6789Z" fill="black"/>
</svg>

    `;
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.innerHTML = plusSVG;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.innerHTML = minusSVG;
    }
}