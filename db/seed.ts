// import the prisma client so that we can interact with the database
// bring in the sample data that we want to seed the database with
// then we will have an asynchronous function that will seed the database with the sample data,
// because the methods that we will use to interact with the database are asynchronous
// the function will be called main, and we will run it at the end of the file
// in the main function we will initialize the prisma object
// we then want to create the products in the database
// then do a console log to show that the seeding is complete
// finally we will close the prisma connection
// run in the terminal with npx tsx ./db/seed 


import { PrismaClient } from '@prisma/client';
import  sampleData  from './sample-data';

async function main() {
    const prisma = new PrismaClient();
    // we will delete all the products in the database
    await prisma.product.deleteMany();

    // we will then create the products in the database, with the sampleData.products array
    await prisma.product.createMany({data: sampleData.products});

    // we will then log that the seeding is complete
    console.log('Seeding complete');
}

main();

