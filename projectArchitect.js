function projectArchitect(input) {
    let name = input[0];
    let numberProjects = input[1];
    let hours = numberProjects * 3;
    

    console.log(`The architect ${name} will need ${hours} hours to complete ${numberProjects} project/s.`)
}

projectArchitect(["Teodor", "4"])