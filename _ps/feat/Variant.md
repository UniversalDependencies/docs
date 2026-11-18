---
layout: feature
title: 'Variant'
shortdef: 'alternative form of word'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Short">Short</a></td>
  <td><a href="#Long">Long</a></td>
  <td><a href="#Weak">Weak</a></td>
  <td><a href="#Dir">Dir</a></td>
</tr>
</table>

The `Variant` feature helps distinguish alternate word forms for the same lemma and set of features.
The `Short` value of this feature is used in several situations, while the other possible values are used only for particular pronouns.


### <a name="Short">`Short`</a>: short variant
This feature is used for special short variant of various verbal, nominal and pronominal forms:

(1) The subjunctive of the verb تلل _tlël_ “to go” is irregular and consist of a word لاړ _lâṛ_ and finite forms of the auxiliary verb شول _šwël_ (perfective counterpart of کېدل _kedë́l_ “to become”). The form لاړ _lâṛ_ is currently annotated as a "short infinitive", i.e. with `VerbForm=Inf` and `Variant=Short`, in contrast to the proper (perfective) infinitive لاړل _lâṛë́l_.

(2) Several forms of the past stem may be shortened missing the ل _ë́l_ suffix:
  * (a) past indicative (only when the past stem is different from the present stem),
  * (b) non-direct cases of the infinitive,
  * (c) past participle,
  * (d) conditional form.

NOTE: For a few irregular verbs, these "short" forms may be the only acceptable forms. If this confirms, the feature will be removed from them.

(3) Some inanimate nouns, often with the meaning of a measuring unit, ending in ونه _úna_ in plural,
have the plural ending usually shortened to ه _a_ after a numeral or another quantifier.

(4) Some nouns may ending in ونو _úno_ or انو _ấno_ in non-direct cases of plural,
may have the ending shortedned to و _o_.

NOTE: The points (3) and (4) may be the same case, but there are few occurrences of the point (4) in the treebank for now to confirm that.

(5) The remote demonstrative pronoun هفسې _háġase_ “such like that/those” may be shortened to هسې _háse_.



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
 

### <a name="Long">`Long`</a>: long variant of proximate demonstrative pronoun
There are two series of proximate demonstrative pronouns: based on the short variant دا _dâ_ and the long variant دغه _daġa_ (this/these), and their. Because the long variant is less frequent and, unlike the short one, it lacks the counterpart series in personal pronouns, the short variant is unmarked and the the long variant is marked with the `Variant=Long` feature.

#### Examples
* (a) دغه _daġa_, دغۀ _dáġë_, دغې _dáġe_, دغو _dáġo_ “this/these”
* (b) همدغه _hamdáġa_, همدغۀ _hamdáġë_, همدغې _hamdáġe_, همدغو _hamdáġo_ “same”
* (c) دغسې _dáġase_ “such like this/these”
* (d) همدغسې _hamdáġase_ “same like this/these”


### <a name="Weak">`Weak`</a>: weak pronoun
Special type of personal pronouns, used as unstressed predicate arguments of transitive verbs or unstressed possessive pronouns. The weak pronoun یې _ye_ is also used in contracted forms (which are separeted in UD annotation) with some prepositions. (See also [PronType]().)

The weak pronouns are clitics and usually occupy the second position in the sentence.

The predicate arguments which the verb agree with, can be omitted, but the other argument of transitive verb, i.e. the object in non-past tenses and the subject in past tenses, cannot be omitted and the weak pronoun has to be used at least.

#### Examples
* non-past transitive object: .پلار **یې** وینی _plâr **ye** winí._ “The father sees **him/her/it/them**.”
* past transitive subject: .کتابونه **دې** ولوستل _kitâbúna **de** wë́lwastël._ “**You** read the books.”
* possession: ورور **مې** _wror **me**_ instead of more usual **زما** ورور _**zmâ** wror_ “**my** brother”
* with preposition: **پر**ې _**pr**e_ (**پر**+یې _**për**+ye_) “on it” f, **تر**ې _**tr**e_ (**تر**+یې _**tër**+ye_) “up to it”, **پر**ې خبرې نۀ کوم _**pr**e xabáre në́ kawëm_ “I do not speak it”, lit. “**on_it** talk not I_do” (about a language)

NOTE: The use with prepositions is debatable. It may be not correct to consider these cases multi-word tokens
including the weak pronoun یې _ye_. This annotation may be changed in the future after more research will be done.

### <a name="Dir">`Dir`</a>: directional pronoun
Special type of personal pronouns, which are used as verb prefixes with the meaning of a direction and also in contracted forms with some postpositions. In both cases the token is considered a multi-word token in the UD annotation, so the directional pronoun is a separate word. (See also [PronType]().)

#### Examples
* as verb prefix: **ور**کول _**war**kawë́l “to give” (lit. “to do towards somebody)”, **را**نیول _**râ**niwë́l_ “to catch” (something moving towards the actor)
* with preposition: **ور**نسره _**war**sará_ “with him/her/it/them”, **در**باندې _**dar**bấnde_ “upon you”

<!-- Interlanguage links updated Út 10. listopadu 2026, 22:38:06 CET -->
