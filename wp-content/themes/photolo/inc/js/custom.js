jQuery(document).ready(function($){
	   	var post_type = $('#customize-control-photolo_blog_page_layout :checked').val();
			if(post_type == 'default') {
	   			$('#customize-control-photolo_blog_heading_archive_section').show();
	   		}
	   		else{
	   			$('#customize-control-photolo_blog_heading_archive_section').hide();	
	   		}
});