function display(Batch) {
    switch (Batch) {
        case "PPA":
            {
                console.log("Batch time 1 PM");
                break;
            }
        case "Angular":
            {
                console.log("Batch time is 4 pm");
                break;
            }
        case "LB":
            {
                console.log("batch time : 7.30 pm");
                break;
            }
        default:
            {
                console.log("there is no such batch");
                break;
            }
    }
}
display("LB");
