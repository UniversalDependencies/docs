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

Classification of named entities (token-based, no nesting of entities etc.). The feature applies mainly to the [PROPN]() tag; in multi-word foreign names, [adjectives](ADJ) may also have this feature (they preserve the `ADJ` tag, because they would not otherwise occur in Armenian outside the named entity).

### <a name="Geo">`Geo`</a>: geographical name

Names of cities, countries, rivers, mountains, etc.

#### Examples

* _Պօլիս_/_Pòlis_ “Constantinople”, _Շուղր_/_Šowġr_ “Shughr”, _Հռօմկլայ_/_Hṙòmklay_ “Rumkale”, _Մերզիման_/_Merziman_ “Merzumen”, _Սամոսատ_/_Samosat_ “Samsat”

### <a name="Prs">`Prs`</a>: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name. This value is also used for pseudonyms, nicknames, pen names, etc.

#### Examples

* _Շնորհալի_/_Šnorhali_ “Shnorhali”, _Արևելցի_/_Arewelc’i_ “Areveltsi”, _Ռոսլին_/_Ṙoslin_ “Roslin”, _Ապիրատ_/_Apiṙat_ “Apirat”

### <a name="Giv">`Giv`</a>: given name of person

Given name (not family name). This is usually the first name.

#### Examples

* _Հեթում_/_Het’owm_ “Hethum”, _Վասակ_/_Vasak_ “Vasak”, _Պօղոս_/_Pòġos_ “Paul”, _Շահաբաս_/_Šahabas_ “Shah Abbas”


### <a name="Sur">`Sur`</a>: surname / family name of person

Family name (surname). This is usually the last name.

#### Examples

* _Պահլավունի_/_Pahlavowni_ “Pahlavuni”,  _Հեթումյան_/_Het'umyan_ “Hethumid”

### <a name="Oth">`Oth`</a>: other

Names of groups, religious feasts, events, etc.

#### Examples

* _Թոնդրակեցիներ_/_T’ondrakec’iner_ “Tondrakians”, _Զատիկ_/_Zatik_ “Easter”
<!-- Interlanguage links updated Út 30. června 2026, 10:59:01 CEST -->
