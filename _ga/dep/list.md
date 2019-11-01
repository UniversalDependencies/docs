---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The `list` relation is used for chains of comparable items.

### Example

_Is iad seo na príomhchineálacha breiseán bia : <b>1)</b> dathuithe <b>2)</b> leasaithigh <b>3)</b> antocsaídigh_ `These are the main types of food additives : <b>1)</b> colouring <b>2)</b> preservatives <b>3)</b> antioxidants' 

~~~ sdparse
Is iad seo na príomhchineálacha breiseán bia : 1) dathuithe 2) leasaithigh 3) antocsaídigh \n Is they DEM the main_types additives food : 1) colouring 2) preservatives 3) antioxidants 
list(príomhchineálacha,1))
list(príomhchineálacha,2))
list(príomhchineálacha,3))
~~~

_is féidir foinn pheinteatonacha (bunaithe ar chúig nóta: d, <b>r</b>, <b>m</b>, <b>s</b>, <b>l</b>) a léamh_ `it is possible to read pentatonic melodies (based on five note: d, <b>r</b>, <b>m</b>, <b>s</b>, <b>l</b>)

~~~ sdparse
is féidir foinn pheinteatonacha (bunaithe ar chúig nóta : d , r , m , s , l ) a léamh \n is possible melodies pentatonic ( based on five note : d , r , m , s , l) to reading
list(d, r)
list(d, m)
list(d, s)
list(d, l)
~~~
