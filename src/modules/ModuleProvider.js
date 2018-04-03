

import DataMap from '../structures/Map'
import InitializeModuleBase from './components/InitializeModuleBase';


class ModuleProviderManager
{
    constructor()
    {
        this.proxyModules = new DataMap();
    }

    attach(modulesManager, moduleName, args)
    {
        let attached = modulesManager.attached;

        if (attached.has(moduleName))
            throw new Error('ModuleManager.attach: Could not attach module ' + moduleName + '. Already exists');

        if (!this.proxyModules.has(moduleName))
            throw new Error('ModuleManager.attach: Module type ' + moduleName + ' don\'t exists.');

        // create a new module
        let newModule = this.proxyModules.get(moduleName)(modulesManager, args);

        // initialize entity module
        InitializeModuleBase(newModule, modulesManager.entity);

        // attach the new module to manager
        attached.set(newModule.type, newModule);

        // add to pending initialization list
        modulesManager._pendingModulesInitialization.push(newModule);

        return newModule;
    }

    register(moduleName, func)
    {
        if (!ModuleProvider.proxyModules.has(moduleName))
        ModuleProvider.proxyModules.set(moduleName, func); // { type: moduleType, func: func }
        
    }    
}

var ModuleProvider = new ModuleProviderManager();

export default ModuleProvider;