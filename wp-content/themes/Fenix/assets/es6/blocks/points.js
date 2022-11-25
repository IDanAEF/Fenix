const points = () => {
    try {
        //market points
        // const marketLines = document.querySelectorAll('.market__table-line');

        // marketLines.forEach(line => {
        //     const marketItem = line.nextElementSibling;

        //     let itemHeight = marketItem.clientHeight,
        //         open = false;

        //     marketItem.style.height = "0px";

        //     line.addEventListener('click', () => {
        //         open = !open;

        //         line.classList.toggle('active');
        //         marketItem.style.height = `${open ? itemHeight : 0}px`;
        //         marketItem.classList.toggle('active');
        //     });
        // });

        const sTap = document.querySelectorAll('.some-tap-place');

        sTap.forEach(tap => {
            tap.addEventListener('click', () => {
                tap.classList.toggle('active');
                tap.nextElementSibling.classList.toggle('active');
            });
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default points;