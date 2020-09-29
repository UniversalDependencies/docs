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

_is féidir foinn pheinteatonacha (bunaithe ar chúig nóta: d, <b>r</b>, <b>m</b>, <b>s</b>, <b>l</b>) a léamh_ `it is possible to read pentatonic melodies (based on five notes: d, <b>r</b>, <b>m</b>, <b>s</b>, <b>l</b>)

~~~ sdparse
is féidir foinn pheinteatonacha (bunaithe ar chúig nóta : d , r , m , s , l ) a léamh \n is possible melodies pentatonic ( based on five note : d , r , m , s , l) to reading
list(d, r)
list(d, m)
list(d, s)
list(d, l)
~~~

_Déantar comparáid idir na staideanna éagsúla faoi na <b>ceannteidil</b> seo a leanas: <b>costas</b>; <b>cruth/cuma</b>; <b>blas</b>; <b>bialuach</b>; <b>líon</b> na mbreiseán; <b>tír</b> a dhéanta._ `The different states are compared under the following <b>headings</b>: <b>cost</b>; <b>shape/appearance</b>; <b>taste</b>; <b>food value</b>; <b>amount</b> of additives; <b>country</b> of production

~~~ sdparse
Déantar comparáid idir na staideanna éagsúla faoi na ceannteidil seo a leanas: costas ; cruth / cuma ; blas ; bialuach ; líon na mbreiseán ; tír a dhéanta. \n Is_made a_comparison between the states different under the headings this that follows: cost; shape / appearance; taste; food value; amount of adjectives; country of_its production.
appos(ceannteidil, costas)
list(costas, cruth)
list(costas, blas)
list(costas, bialuach)
list(costas, líon)
list(costas, tír)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:20 CEST 2020 -->
