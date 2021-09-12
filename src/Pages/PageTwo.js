import React from 'react'
import LineChartOne from '../Charts/LineChartOne'

const PageTwo = () => {
   return (
      <div style={{ height: '100vh', overflowY: 'auto', scrollSnapType: 'y mandatory', scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
         <div id="main_content" className='main_content wrapper'>
            <h1> page 2 bitches!</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis possimus tempore sunt asperiores nam deserunt maiores natus quidem mollitia adipisci dignissimos doloremque delectus placeat, minima, ad labore hic at harum cupiditate assumenda, facilis autem molestias ullam. Itaque officia voluptatem vero, fugit, repellendus cumque qui animi tempore, optio est saepe praesentium. Doloremque, sapiente. Enim, vitae nisi, aut ducimus quidem soluta ipsa odio dolorem laudantium quaerat sunt culpa saepe porro numquam laborum? Cumque, accusamus nihil incidunt inventore ut maiores fugiat est similique modi optio consequuntur? Ad deleniti aliquid impedit ea excepturi ipsam maxime illo consequuntur in id accusamus reprehenderit dolorum placeat voluptatum, quam, possimus cupiditate aperiam earum tempora fuga ipsa ducimus nemo. Voluptatum nisi autem eligendi odit officia nobis, maiores obcaecati. In accusantium distinctio delectus voluptatibus veritatis sequi impedit vero temporibus exercitationem quis dolor id quam provident est maiores, tenetur illum sint numquam. Quae illum qui sequi consequatur impedit odio quasi culpa aut consequuntur omnis. Ratione rerum velit nisi dignissimos dolore minima maxime saepe dolorem, similique modi a perspiciatis nihil amet reprehenderit eius. Quibusdam, sint tempore nostrum delectus deserunt perferendis amet? Amet laboriosam quaerat non earum excepturi expedita consequatur nulla delectus asperiores est unde hic, commodi quisquam quas. Ab, repellendus facere!</h2>
            <LineChartOne colorTheme='red' colorOutline='black' />
         </div>
      </div>
   )
}

export default PageTwo
