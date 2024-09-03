---
layout: feature
title: 'Variant'
shortdef: 'alternative form of word'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Long">Long</a></td>
  <td><a href="#Short">Short</a></td>
</tr>
</table>

Sometimes there are multiple word forms for the same lemma and set of features.
The `Variant` feature helps distinguish alternate forms.

### <a name="Long">`Long`</a>: long variant of irregular perfective verbs
The long variant is used for finite forms of the verbs کړل _kṛël_ “to do” (perfective counterpart of کول _kawë́l_) and شول _šwël_ “to become” (perfective counterpart of کېدل _kedë́l_) that have the regular prefix, although these verbs are usually used without it.

#### Examples
* subjunctive of the verb کړل _kṛël_: وکړم _wë́kṛëm_ instead of کړم _kṛëm_ “(that) I do / I would do”
* perfective future of the verb شول _šwël_: وشم _wë́šëm_ instead of شم _šëm_ “I will become”


### <a name="Short">`Short`</a>: special short variant of some verb forms

The short variant is used for special forms of several verbs, that do not have a counterpart in other verbs.

#### Examples
* The subjunctive of the verb تلل _tlël_ “to go” is irregular and consist of a word لاړ _lâṛ_ and finite forms of the auxiliary verb شول _šwël_ (perfective counterpart of کېدل _kedë́l_ “to become”). The form لاړ _lâṛ_ is currently annotated as a "short infinitive", i.e. with `VerbForm=Inf` and `Variant=Short`, in contrast to the proper (perfective) infinitive لاړل _lâṛë́l_.
  * e.g.: ‏‏‎غواړم هلته **لاړ** شم _ġwâṛë́m hálta **lâṛ** šëm_ “I want to go there”
* In the past potential mood, the finite forms of the auxiliary verb شول _šwël_ (perfective counterpart of کېدل _kedë́l_ “to become”) are often replaced with an invariable word شوای _šwây_, which is currently annotated as a "short participle", i.e. with `VerbForm=Part` and `Variant=Short`, in contrast to the proper participle شوی _šë́way_.
  * e.g.: ما خوړلی شوای _mâ xwaṛë́lay šwây_ “I could eat”

<!-- Interlanguage links updated Ne 5. května 2024, 18:20:26 CEST -->
