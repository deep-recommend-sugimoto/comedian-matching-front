import { NgModule } from '@angular/core'

import { LikeFromOthersRoutingModule } from './like-from-others-routing.module'
import { LikeFromOthersComponent } from './like-from-others.component'
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { LikeFromOthersCComponent } from './like-from-others-c/like-from-others-c.component';
import { LikeFromOthersPComponent } from './like-from-others-p/like-from-others-p.component';
import { LikeFromOthersDetailPComponent } from './like-from-others-detail-p/like-from-others-detail-p.component'

@NgModule({
    declarations: [LikeFromOthersComponent, LikeFromOthersCComponent, LikeFromOthersPComponent, LikeFromOthersDetailPComponent],
    imports: [DeepRecommendSharedModule, LikeFromOthersRoutingModule],
})
export class LikeFromOthersModule {}
