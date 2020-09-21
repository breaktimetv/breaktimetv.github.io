---
layout: main2
permalink: /pruebita
pagination: 
  enabled: true
---


<main class="home" id="post" role="main" itemprop="mainContentOfPage" itemscope="itemscope" itemtype="http://schema.org/Blog">


<div class="home">

  <h1 class="page-heading">Posts</h1>
  


  <ul class="post-list">
    <!-- 
        Here is the main paginator logic called.
        All calls to site.posts should be replaced by paginator.posts 
    -->
    {% for post in paginator.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
  
  <!-- 
    Showing buttons to move to the next and to the previous list of posts (pager buttons).
  -->
  {% if paginator.total_pages > 1 %}
  <ul class="pager">
      {% if paginator.previous_page %}
      <li class="previous">
          <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr; Anterior</a>
      </li>
      {% endif %}
      {% if paginator.next_page %}
      <li class="next">
          <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Siguiente &rarr;</a>
      </li>
      {% endif %}
  </ul>
  {% endif %}



</div>



</main>