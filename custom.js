 {%- when 'variant_description' -%}
              <div class="variant_description">
                 {%- assign selected_variant = product.selected_or_first_available_variant -%}
                {%- if selected_variant.metafields.custom.variant_description != blank %}
                {{ selected_variant.metafields.custom.variant_description | metafield_tag }}
                {%- endif %}

               </div>
/* Div Reload and refresh the div */ 
$(document).ready(function(){
  $(".click_event").click(function(){
     setTimeout(function() {
    var url = window.location.href; // Get the URL from the clicked element
    console.log("Updated Url"+url);
    $(".variant_description").load(url + " .variant_description > *");
         }, 800); // 3 seconds delay in milliseconds
     });

  });
