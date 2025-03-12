function monthOfYear(week) {
    switch (week) {
        case 1:
            console.log(`${week}-January`);
            break;

            case 2:
                console.log(`${week}-Feburary`);
                break;
            
                case 3:
                    console.log(`${week}-March`);
                    break;

                    case 4:
                        console.log(`${week}-April`);
                        break;

                        case 5:
                            console.log(`${week}-May`);
                            break;

                            case 6:
                                console.log(`${week}-June`);
                                break;

                                case 7:
                                    console.log(`${week}-July`);
                                    break;

                                    case 8:
                                        console.log(`${week}-August`);
                                        break;

                                        case 9:
                                            console.log(`${week}-September`);
                                            break;

                                            case 10:
                                                console.log(`${week}-Octomber`);
                                                break;

                                                case 11:
                                                    console.log(`${week}-November`);
                                                    break;

                                                    case 12:
                                                        console.log(`${week}-December`);
                                                        break;
    
        default:
                console.log(`${week}-Invalid Month Data`);
                
            break;
    }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);