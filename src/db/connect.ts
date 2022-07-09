import mongoose from "mongoose";
import config from 'config';
import log from '../logger';

function connect(){
    const dbUri = config.get('dbUri') as string;
    
    return mongoose.connect(dbUri)
        .then(() => {
            log.info("Database connected successfully")
        })
        .catch(err => {
            log.error("Error connecting to Mongo", err);
            process.exit(1);
        });
}

export default connect;