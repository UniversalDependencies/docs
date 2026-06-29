---
layout: feature
title: 'NameType'
shortdef: 'type of named entity'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Geo">Geo</a></td>
  <td><a href="#Giv">Giv</a></td>
  <td><a href="#Oth">Oth</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Sur">Sur</a></td>
</tr>
</table>

Classification of named entities (token-based, no nesting of entities etc.)
The feature applies mainly to the [PROPN]() tag; in multi-word foreign names, [adjectives](ADJ) may also have this feature (they preserve
the `ADJ` tag but at the same time they would not exist in Armenian otherwise than in the named entity).

### <a name="Geo">`Geo`</a>: geographical name

Names of cities, countries, rivers, mountains etc.

#### Examples

* _<b>Պօլիս</b>/Pòlis, <b>Շուղր</b>/Šowġr, <b>Հռօմկլայ</b>/Hṙòmklay, <b>Մերզիման</b>/Merziman, <b>Սամոսատ</b>/Samosat_ “Constantinople, Shughr, Rumkale, Merzumen”

### <a name="Prs">`Prs`</a>: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name. We used this value for pseudonyms, nicknames, pen-names etc.

#### Examples

* _<b>Շնորհալի</b>/Šnorhali, <b>Արևելցի</b>/Arewelc’i, <b>Ռոսլին</b>/Ṙoslin, <b>Ապիրատ</b>/Apiṙat_ “Shnorhali, Areveltsi, Roslin, Apirat”

### <a name="Giv">`Giv`</a>: given name of person

Given name (not family name). This is usually the first name.

#### Examples

* _<b>Հեթում</b>/Het’owm, <b>Վասակ</b>/Vasak, <b>Պօղոս</b>/Pòġos, <b>Շահաբաս</b>/Šahabas_ “Hethum, Vasak, Paul, Shah Abbas”


### <a name="Sur">`Sur`</a>: surname / family name of person

Family name (surname). This is usually the last name.

#### Examples

* _<b>Պահլավունի</b>/Pahlavowni,  <b>Հեթումյան<b>/Het'umyan_ “Pahlavuni, Hethumyan”

### <a name="Oth">`Oth`</a>: other

Names of groups, fests, events etc.

#### Examples

* _<b>Թոնդրակեցիներ/T’ondrakec’iner, Զատիկ/Zatik</b>&nbsp;_ “Tondrakians, Easter”
<!-- Interlanguage links updated Po 29. června 2026, 18:10:52 CEST -->
