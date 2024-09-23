---
layout: feature
title: 'Mood'
shortdef: 'mood'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Sub">Sub</a></td>
</tr>
</table>

In Classical Armenian, Mood is an inflectional feature that is tagged on finite [verbs](xcl-pos/VERB) and ([auxiliaries] (xcl-pos/AUX), and is intricately related to the features of [Aspect](xcl-feat/Aspect) and [Tense](xcl-feat/Tense).

### <a name="Ind">`Ind`</a>: indicative

The indicative can be considered the default mood. A verb in indicative merely states that something happens, has happened or will happen, without adding any attitude of the speaker.

#### Examples

* Present indicative: ասեմ/_asem_ “I say; I am saying”.

### <a name="Imp">`Imp`</a>: imperative

The speaker uses imperative to order or ask the addressee to do the action of the verb. Classical Armenian differentiate between the imperative and prohibitive (negated imperative). Both categories are tagged as `Mood=Imp` and are differentiated by the presence of the dependent negative particle մի/_mi_ “not”, which is used with the prohibitive. 

#### Examples

* Imperative: ասա/_asa_ “say!”
* Prohibitive: մի լար / _mi lar_ “don't cry!”

### <a name="Sub">`Sub`</a>: subjunctive / future

The subjunctive mood is used under certain circumstances in subordinate clauses, typically for actions that are subjective or otherwise uncertain. In some contexts the mood expresses also the desire that the action happens; it is thus close to both optative and jussive. In Classical Armenian, it has perfective and imperfective forms, and can express the future.

The subjunctive can have an imperative form, sometimes called “cohortative”, with a special form of 2sg. in -ջիր/_-ǰir_. Given that the UD annotation scheme does not allow to combine two instances of one feature, the imperative forms do not have a dedicated tag in the current version of the CAVaL treebank and are tagged as vatiants of the 2sg. subjunctive form.

#### Examples

* Imperfective subjunctive: ասիցեմ/_asicʻem “I would/will be saying”
* Perfective subjunctive: ասասցեմ/_asascʻem “I would/will say”
* Cohortative: ասասջիր/_asasǰir_ “could you say!”

### References

Jensen, Hans. 1959. _Altarmenische Grammatik._ Heidelberg: Winter.

Meillet, Antoine. 1913. _Altarmenisches Elementarbuch._ Heidelberg: Winters (<a href="https://archive.org/details/altarmenischesel00meil/page/n5/mode/2up" target="_blank">Internet Archive</a>)

Meillet, Antoine. 1962. _Études de linguistique et de philologie arméniennes. I: Recherches sur la syntaxe comparée de l'arménien. Suivies de la composition en arménien._ Lisbonne: Imprensa Nacional de Lisboa.
