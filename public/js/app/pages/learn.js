$(document).ready(function() {
        api.kachha.list({
                success:function (d) {
                    console.log(d[0].class_uuid);
                    $.each(d, function (i, v) {
                        var org_title = v.org_title;
                        if(org_title == null)
                        {
                            org_title = 'Edushala Member';
                        }
                            $('#course_catalog').append('<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 wow fadeIn"><div class="video-wrapper course-catalog course-widget clearfix"><div class="post-media"><div class="entry"><img src="http://files.edushala.com/course/'+ v.class_uuid +'/img/sml.jpg" alt="" class="img-responsive"><div></div></div></div><!-- end media --><div class="widget-title edu-box clearfix"><h3><a href="/learn/'+ v.class_uuid + '">'+ v.class_name + '</a></h3><hr><div class="bottom-line clearfix"><div class="pull-left"><a href="#" class="readmore">'+ v.full_name +'</a></div></div><!-- end bottom --></div><!-- end title --></div><!--widget --></div><!-- end col -->');
                    });
                },
                error:function () {
                 console.log('error');
                }
        });
});