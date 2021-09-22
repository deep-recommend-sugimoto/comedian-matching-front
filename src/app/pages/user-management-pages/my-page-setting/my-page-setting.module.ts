import { NgModule } from '@angular/core'

import { MyPageSettingRoutingModule } from './my-page-setting-routing.module'
import { MyPageSettingComponent } from './my-page-setting.component'
import { MyPageSettingCComponent } from './my-page-setting-c/my-page-setting-c.component'
import { MyPageSettingPComponent } from './my-page-setting-p/my-page-setting-p.component'
import { DeepRecommendSharedModule } from 'src/app/general/shared.module'
import { MyPageSettingResolverService } from './my-page-setting.resolver'

@NgModule({
    declarations: [MyPageSettingComponent, MyPageSettingCComponent, MyPageSettingPComponent],
    imports: [DeepRecommendSharedModule, MyPageSettingRoutingModule],
    providers: [MyPageSettingResolverService],
})
export class MyPageSettingModule {}
