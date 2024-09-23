---
layout: feature
title: 'Aspect'
shortdef: 'aspect'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Perf">Perf</a></td>

</tr>
</table>

In Classical Armenian, aspect as an inflectional feature, which is tagged on finite [verbs](xcl-pos/VERB) and ([auxiliaries] (xcl-pos/AUX)), and is intricately related to the features of [Tense](xcl-feat/Tense) and [Mood](xcl-feat/Mood). Aspect is morphologically expressed by paradigmatically opposed imperfective and perfective stems, from which all finite verb forms are derived. In particular, the prohibitive, derived from the imperfective stem, is tagged as `Imp`, whereas the imperative, derived from the perfective stem, is tagged as `Perf`. 

Note that unlike <a href="https://universaldependencies.org/hy/feat/Aspect.html">Modern Eastern Armenian</a>, where different verb forms can take the same aspectual tag depending on thier contextual use, the annotation of aspect follows a purely morphological principle in the Classical Armenian treebank.

### <a name="Imp">`Imp`</a>: imperfect aspect

The action is typically presented as incomplete or having no specific temporal localization. Within a two-aspect system, the imperfective aspect covers several aspectual meanings such as durative, progressive, iterative, distributive, habitual. The tag is applied to the present, imperfect, present subjunctive, and prohibitive.

#### Examples

* <b>ասեմ</b> ձեզ / _asem jez_ “I am telling you” (progressive action in the moment of speaking)
* <b>բժշկէր</b> զամենայն հիւանդութիւնս / _bžškēr zamenayn hiwandowtʻiwns_ “he was healing every sickness” (continuous activity without an exact temporal localization)

### <a name="Perf">`Perf`</a>: perfect aspect

The action is typically presented as completed or as viewed in its entirety. Within a two-aspect system, the perfective aspect covers several aspectual meanings such as completive and punctive. The tag is applied to the aorist, aorist subjunctive, and imperative.

#### Examples

* <b>եմուտ</b> նա ի նաւ / _emowt na i naw_ “he entered the ship”


### References

Jensen, Hans. 1959. _Altarmenische Grammatik._ Heidelberg: Winter.

Meillet, Antoine. 1913. _Altarmenisches Elementarbuch._ Heidelberg: Winters (<a href="https://archive.org/details/altarmenischesel00meil/page/n5/mode/2up" target="_blank">Internet Archive</a>)

Meillet, Antoine. 1962. _Études de linguistique et de philologie arméniennes. I: Recherches sur la syntaxe comparée de l'arménien. Suivies de la composition en arménien._ Lisbonne: Imprensa Nacional de Lisboa.
