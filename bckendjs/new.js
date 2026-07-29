import * as fs from 'fs/promises'
try{
    await fs.mkdir
    (
        "C:\\Users\\abhin\\OneDrive\\Apps\\code\\connectingfntndback\\bckendjsblankFolder"
    );
    console.log("Folder created successfully");
} catch (error) {
    console.error("Error creating folder:", error);
}
 
