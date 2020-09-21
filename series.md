---
layout: main2
permalink: /series
title: "Ultimas series"
---


<main class="home" id="post" role="main" itemprop="mainContentOfPage"  itemscope="itemscope" itemtype="http://schema.org/Blog">
  {% assign post_news = site.posts | where:"category", "series" %}
            {% assign min = 0 %}
            {% assign max = post_news.size %}
            {% assign diff = max | minus: min %}
            {% assign randomNumber = "now" | date: "%N" | modulo: diff | plus: min %}
		<div id="portada_index" style="display:none;height: 400px;background-image: linear-gradient(0deg, rgb(17, 17, 17) 0%, rgba(0,0,0,0.7175245098039216) 49%, rgba(0,212,255,0) 100%), url({{post_news[randomNumber].image_banner}});background-size: 100% 400px;background-repeat: no-repeat;">
			</div>
	<div align="center" id="info_index" style="display:none;margin: -125px 10px 0 10px; text-align:center;padding-bottom: 15px;line-height:33px">
			<p style="color:white;    font-size: 35px;
			padding: 10px 10px 0px 10px;">{{post_news[randomNumber].title}}</p>
			<p style="color:white;font-size: 14px;
			padding-left: 10px;
			padding-right: 10px;">{{post_news[randomNumber].genero}}</p>
						<div class="col-lg-12" style="margin-top: 10px;">
								<a onclick="mostrar()" style="border-radius: 5px;
								background: white;
								color: black;
								font-size: 12px;
								margin-left: 0px;
								position: unset;
								padding: 3px 15px;" class="header-video__play-trigger2" href="{{ post_news[randomNumber].url | prepend: site.baseurl }}"><i class="fas fa-play" style="padding-right: 5px;"></i> Ver Ahora</a>

							

									<a title="Más información" data-toggle="modal" data-target="#myModalInformacion">
									<i id="prueba1" class="fas fa-exclamation-circle" style="    padding-left: 25px;padding-right: 5px;color:white"></i>

								    <span id="prueba2" style="color:white">Información</span>
																	
									</a>

									<div class="modal fade" id="myModalInformacion" role="dialog">
										<div class="modal-dialog">
										
											<!-- Modal content-->
											<div class="modal-content">
												<div class="modal-header">
													<button style="font-size: 25px;" type="button" class="close" data-dismiss="modal">&times;</button>
													<h4 class="modal-title" style="font-size: 18px;">{{post_news[randomNumber].title}}</h4>
												</div>
												<div class="modal-body">


													<div class="row">
														<div class="col-md-4 col-lg-4 col-xs-4" style="    padding: 0;">
																<img style="width:100%" alt="{{post_news[randomNumber].title}}" title="{{post_news[randomNumber].title}}" src="{{post_news[randomNumber].image_carousel}}" >
																

														</div>

														<div class="col-md-8 col-lg-8 col-xs-8">

																

																	<p style="color:black;    font-size: 15px;
																	padding: 0;    text-align: left;"><span style="font-weight: bold">Año: </span>{{post_news[randomNumber].anio}}</p>
																		<p style="color:black;    font-size: 15px;
																		padding: 0;    text-align: left;"><span style="font-weight: bold">Calidad: </span>{{post_news[randomNumber].calidad}}</p>

																		<p style="color:black;    font-size: 15px;
																		padding: 0;    text-align: left;"><span style="font-weight: bold">Duración: </span>{{post_news[randomNumber].duracion}}</p>

																		<p style="color:black;    font-size: 15px;
																		padding: 0;    text-align: left;"><span style="font-weight: bold">Clasificación: </span>{{post_news[randomNumber].clasificacion}}</p>
																
																
															
															</div>
													</div>

													<div class="row">
															<div class="col-md-12 col-lg-12 col-xs-12">
																	<p style="color:black;font-size: 15px;
																	padding:0;    text-align: left;"><span style="font-weight: bold">Géneros: </span>{{post_news[randomNumber].genero}}</p>

															</div>

													</div>

													<div class="row" style="margin-bottom: 10px;">
															<div class="col-md-12 col-lg-12 col-xs-12" style="    height: 130px;
															overflow: auto;">
																	<p style="color:black;    font-size: 15px;
																	padding: 0px;    text-align: left;">{{post_news[randomNumber].description}}</p>

															</div>

													</div>

											

													<div class="row" style="margin-top: 25px;margin-bottom: 10px;">
															<div class="col-md-12 col-lg-12 col-xs-12" align="center">

																	<a onclick="mostrar()" style="border-radius: 5px;
																	background: white;
																	color: black;
																	font-size: 12px;
																	margin-left: 0px;
																	
																	padding: 3px 15px;" class="header-video__play-trigger2" href="{{ post_news[randomNumber].url | prepend: site.baseurl }}"><i class="fas fa-play" style="padding-right: 5px;"></i> Ver Ahora</a>
									

															</div>

													</div>
			
												</div>
								
											</div>
											
										</div>

									</div>


													


					</div>
    </div>
     <div cold-md="12" align="center">
         <div class="row message_k" style="margin-bottom: 15px;"><div class="alert alert-danger" style="text-align:center; margin-bottom: 0; border-radius: 0; background-color: #d2f1ba; color: #333; border: 1px solid #abe2ad; "><i class="fa fa-exclamation-circle mr5" style="padding-right: 10px;"></i> Por cuestiones de optimización de carga, no le mostraremos todas nuestras series disponibles, si desea ver una en particular, puede usar el buscador de nuestro menú.</div></div>
    </div>
    <div id="grid" class="row flex-grid">
            {% assign post_news = site.posts  | where:"category","series"%}
                {% assign min = 0 %}
			{% for post in post_news limit:100 %}
					{% assign max = post_news.size %}
					{% assign diff = max | minus: min %}
					{% assign randomNumber = "now" | date: "%N" | modulo: diff | plus: min %}
					{% assign cadena1 = randomNumber %}
					{% assign cadena2="," %}
					{% assign cadena_final = cadena_final | append: cadena1 | append: cadena2   %}
					{% assign min=min | plus:1 %}
			{%endfor%}
			{% assign my_array = cadena_final | split: "," %}
			{% assign no_repetidos = my_array | uniq | join: "," %}
			{% assign no_repetidos_split = no_repetidos | split: "," %}
			    {% for randomNumber in no_repetidos_split %}
	     	        {% assign randomNumber2 = randomNumber | plus: 0 %}
					 <article   class="box-item col-xs-4 col-sm-3 col-md-2 col-lg-2" itemscope="itemscope" itemtype="http://schema.org/BlogPosting" itemprop="blogPost">
                                <div class="box">
                                <div class="box-body">
                                    {% if post_news[randomNumber2].image_carousel %}
                                        <div class="cover">
                                            <a onclick="mostrar()" href="{{ post_news[randomNumber2].url | prepend: site.baseurl }}">
                                            <img src="../../assets/img/placeholder-min.png" data-url="{{ post_news[randomNumber2].image_carousel }}" class="preload">
                                            </a>
                                         	{% if post_news[randomNumber2].idioma == 'Latino' %}
														<div class="latino" title="Audio Latino"></div>
												{% else %}
														{% if post_news[randomNumber2].idioma == 'Castellano' %}
														<div class="castellano" title="Audio Castellano"></div>
														{% else %}
														{% if post_news[randomNumber2].idioma == 'Latino/Castellano' %}
														<div class="latino-castellano" title="Audio Latino y Castellano"></div>
														{% else %}
														{% if post_news[randomNumber2].idioma == 'Latino/Castellano/Subtitulado' %}
														<div class="latino-castellano-subtitulado" title="Audio Latino, Castellano y Subtitulado"></div>
														{% else %}
														{% if post_news[randomNumber2].idioma == 'Latino/Subtitulado' %}
														<div class="latino-subtitulado" title="Audio Latino y Subtitulado"></div>
														{% else %}
														{% if post_news[randomNumber2].idioma == 'Castellano/Subtitulado' %}
														<div class="castellano-subtitulado" title="Audio Castellano y Subtitulado"></div>
														{% else %}
														<div class="subtitulado" title="Audio Subtitulado"></div>
														{% endif %}
														{% endif %}
														{% endif %}
														{% endif %}
														{% endif %}
												    {% endif %}
                                            <div class="titulo"> {{ post_news[randomNumber2].calidad }} </div>
                                        </div>
                                    {% endif %}
                                    <div class="box-info">
                                        <div class="w3l-movie-text">
                                            <h6>
                                                <a onclick="mostrar()" class="post-link" href="{{ post_news[randomNumber2].url | prepend: site.baseurl }}">
                                                        {{ post_news[randomNumber2].title }}
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                </div>
                     </article>
					 {% endfor %}
         </div>





</main>