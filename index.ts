import fs from 'fs';
import { IExampleEventOutputMetadata } from './concerto331';
import { Concerto, ModelManager } from '@accordproject/concerto-core';

class Metadata implements IExampleEventOutputMetadata {
    timestamp = new Date();
    $class = 'concerto331.ExampleEventOutputMetadata';
} 

const m = new Metadata();
const mm = new ModelManager();
mm.addCTOModel(fs.readFileSync('./model.cto', 'utf-8'));
const concerto = new Concerto(mm);

// This works
try {
    concerto.validate(JSON.parse(JSON.stringify(m)));
    console.log('Serialized Object: ✅');
} catch (error) {
    console.log('Serialized Object: ❌');
    console.error(error);
}

// This doesn't work
try {
    concerto.validate(m);
    console.log('Unserialized Object: ✅');
} catch (error) {
    console.log('Unserialized Object: ❌');
    console.error(error);
}