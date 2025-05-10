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
  <td><a href="#Weak">Weak</a></td>
  <td><a href="#Dir">Dir</a></td>
</tr>
</table>

The `Variant` feature helps distinguish alternate word forms for the same lemma and set of features.
It 
Some values of this feature are used in several different cases.

### <a name="Long">`Long`</a>: long variant of irregular perfective verbs
(1) The perfective counterparts of the verbs کول _kawë́l_ “to do” and کېدل _kedë́l_ “to become” are short کړل _kṛël_ and شول _šwël_,
when the verbs are used as auxiliary verbs in compound verb forms, but long وکړل _wë́kṛël_ and وشول _wë́šwël_, when they are used on their own
or as part of light verb constructions. Because the former use is more frequent, only the long variants are marked with the `Variant=Long` feature.

(2) There are two series of proximate demonstrative pronouns: short دا _dâ_ and long دغه _daġa_ (this/these). Because the long variant is less frequent and, unlike th short one, it lacks the counterpart series in personal pronouns, only the long variant is marked with the `Variant=Long` feature.

#### Examples
(1)
* subjunctive of the verb کړل _kṛël_: وکړم _wë́kṛëm_ instead of کړم _kṛëm_ “(that) I do / I would do”
* perfective future of the verb شول _šwël_: وشم _wë́šëm_ instead of شم _šëm_ “I will become”
(2)


### <a name="Short">`Short`</a>: special short variant of some verb forms
(1) The subjunctive of the verb تلل _tlël_ “to go” is irregular and consist of a word لاړ _lâṛ_ and finite forms of the auxiliary verb شول _šwël_ (perfective counterpart of کېدل _kedë́l_ “to become”). The form لاړ _lâṛ_ is currently annotated as a "short infinitive", i.e. with `VerbForm=Inf` and `Variant=Short`, in contrast to the proper (perfective) infinitive لاړل _lâṛë́l_.

(2) Several forms of the past stem may be shortened missing the ل _ë́l_ suffix:
  (a) past indicative (only when the past stem is different from the present stem),
  (b) non-direct cases of the infinitive,
  (c) past participle,
  (d) potential.

(3) Some inamate nouns, often with the meaning of a measuring unit, ending in ومه _úna_ in plural,
have the plural ending usually shortened to ه _a_ after a number.



#### Examples
(1)
* e.g.: ‏‏‎غواړم هلته **لاړ** شم _ġwâṛë́m hálta **lâṛ** šëm_ “I want to go there”

(2)
* (a) ما څوکۍ واخیسته _mâ cawkë́y wấxista_ instead of ما څوکۍ واخیستله _mâ cawkë́y wấxistëla_ “I bought a chair”
* (b) ړنګېدل _ṛëngedë́l_ “to collapse / the collapse” -> د ړنګېدلو _dë ṛëngedë́lo_ or shortened د ړنګېدو _dë ṛëngedó_ “of the collapse”
* (c) intransitive: **راتللی** یم _**râtláy** yëm_ instead of **راتلی** یم _**râtlë́lay** yëm_ “I have come”
* (c) transitive: ما **لوستلی** دی _mâ **lwastáy** dëy_ instead of ما **لوستی** دی _mâ **lwastë́lay** dëy_ “I have read (it)”
* (d) **لیدای** شم _**lidấy** šëm_ instead of **لیدلای** شم _**lidë́lây** šëm_ “I can see”

(3)
* without number: کیلومترونه _kilomitrúna_ “kilometers”
* with number: دوه کیلومتره _dwa kilomítra_ “two kilometers”
 

### <a name="Weak">`Weak`</a>: weak
Special type of personal pronouns, used as unstressed predicate arguments (especially in past tenses) or unstressed possessive pronouns. The weak pronoun یې _ye_ is also used in contracted forms (which are separeted in UD annotation) with some prepositions. (See also [PronType]().)

#### Examples
* subject:
* object:
* possession: ورور **مې** _wror **me**_ instead of more usual **زما** ورور _**zmâ** wror_ “my brother”
* with preposition: **پر**ې _**pr**e_ (**پر**+یې _**për**+ye_) “on it” f, **تر**ې _**tr**e_ (**تر**+یې _**tër**+ye_) “up to it”, **پر**ې خبرې نۀ کوم _**pr**e xabáre në́ kawëm_ “I do not speak it”, lit. “**on_it** talk not I_do” (about a language)

### <a name="Dir">`Dir`</a>: directional
Special type of personal pronouns used in contracted forms (which are separeted in UD annotation) with some postpositions. They are also used as prefixes of many motion verbs, where they express the direction of the motion (but in those cases they are not annotated at all). (See also [PronType]().)

#### Examples
* with preposition: **ور**نسره _**war**sará_ “with him/her/it/them” **در**باندې _**dar**bấnde_ “upon you”

<!-- Interlanguage links updated So 10. května 2025, 18:14:39 CEST -->
