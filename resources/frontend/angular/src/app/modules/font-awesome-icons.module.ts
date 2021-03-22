import { NgModule } from '@angular/core';

// FONT AWESOME
import { FontAwesomeModule, FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import {
    faCity, faFolder, faFolderOpen, faHome, faPlus, faSave, faSignOutAlt,
    faTimes, faTimesCircle, faUserCircle, faSpinner, faExclamationTriangle, faCheckCircle, faSearch,
    faEdit, faPen, faTrash, faEnvelope, faUsers, faEye, faEyeSlash, faSync,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
    imports: [ FontAwesomeModule ],
    exports: [ FontAwesomeModule ]
})

export class FontAwesomeIconsModule {
    constructor(
        faConfig: FaConfig,
        library: FaIconLibrary
    ) {
        faConfig.fixedWidth = true;
        library.addIcons(
            faHome, faCity, faUserCircle, faSignOutAlt, faPlus, faFolder, faFolderOpen,
            faTimes, faTimesCircle, faSave, faSpinner, faExclamationTriangle, faCheckCircle, faSearch,
            faEdit, faPen, faTrash, faEnvelope, faUsers, faEye, faEyeSlash, faSync
        );
    }
}
