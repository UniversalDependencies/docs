---
layout: feature
title: 'Voice'
shortdef: 'voice'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Act">Act</a></td>
  <td><a href="#Cau">Cau</a></td>
  <td><a href="#CauPass">CauPass</a></td>
  <td><a href="#Mid">Mid</a></td>
  <td><a href="#Pass">Pass</a></td>
  <td><a href="#Rcp">Rcp</a></td>
</tr>
</table>

Voice is a feature of verbs that helps to map the traditional syntactic functions, such as subject and object, to semantic roles, such as agent and patient. See also the related feature [subcategorization](Subcat).

### <a name="Act">`Act`</a>: active voice

Prototypically, the subject of the verb is the doer of the action (agent), the object is affected by the action (patient).

By default, the finite and non-finite forms of verbs are labeled `Voice=Act`, except for the cases when they are labeled `Voice=Pass`, `Voice=Mid` or `Voice=Cau` (see below).

#### Examples
* _հայելիին մէջ <b>տեսաւ</b> անոր ժպիտը_/_hayeliin mēǰ <b>tesaw</b> anor žpitë_ “he/she saw his/her smile in the mirror”,
* _քրքիջ մը որ կարծես ապակիները կը <b>դողացնէր</b>_/_kʼrkʼiǰ më or karçes apakinerë kë <b>doġacʼnēr</b>_ “laughter that seemed to shake the windowpanes”,
* _ժամանակ ենք <b>վատնած</b>_/_žamanak enkʼ <b>vatnaç</b>_ “we have wasted time”.


### <a name="Pass">`Pass`</a>: passive voice

The subject of the verb is affected by the action (patient). The doer (agent) is either a non-obligatory oblique phrase of the verb or not overtly expressed.

In Western Armenian, the passive voice is formed either by adding the passive suffix _-ու-_/_-ow-_ before the verbal endings or by replacing the infinitival ending _-ել_/_-el_ with _-իլ_/_-il_; the latter is an archaic pattern inherited from Classical Armenian (for exceptions see below). The finite and non-finite forms of verbs are labeled `Voice=Pass` in the passive constructions.

#### Examples

* _տեսուչը <b>հեռացուած</b> է պաշտօնէն_/_tesowčë <b>heṙacʼowaç</b> ē paštònēn_ “The inspector has been <b>dismissed</b> from his post”,
* _բնակարաններ չեն <b>շինուիր</b>_/_bnakaranner čen <b>šinowir</b>_ “Apartments are not being built”,
* _<b>արգիլուած</b> է իրենց Պատրիարքարան մտնալ_/ _<b>argilowaç</b> ē irencʼ Patriarkʼaran mtnal_ “they are <b>forbidden</b> to enter the Patriarchate”,
* _սեփական շահերէն <b>թելադրուած</b> է_/_sepʼakan šaherēn <b>tʼeladrowaç</b> ē_ “it is motivated by personal interests”.


### <a name="Mid">`Mid`</a>: middle voice

Between active and passive. It also covers reflexive uses, traditionally described as mediopassive (for reciprocal verbs, see below); in this case, the verbs and their lemmas are marked with the passive suffix _-ու-_/_-ow-_. 

Note that there is a small set of middle voice verbs marked with the the verbal ending _-իլ_/_-il_ or passive suffix _-ու-_ (so-called passivized middle verbs). These forms are morphologically very close to the passive, do not have morphologically related non-marked counterparts and are tagged `Voice=Mid` (_կորսուիլ_/_korsowil_ “to get lost, to disappear”).

#### Examples
* _ինքնիրեն կը <b>խորհրդածէր</b>_/_inkʼniren kë <b>xorhrdaçēr</b>_ “he/she was <b>thinking</b> to himself/herself”,
* _ճիգ ըրած է տօնական <b>հագուիլ</b>_/_č̣ig ëraç ē tònakan <b>hagowil</b>_ “he/she made an effort to dress up / to dress festively”,
* _Հայաստանը խոցելի վիճակի մէջ կը <b>գտնուի</b>_/_Hayastanë xocʼeli vič̣aki mēǰ kë <b>gtnowi</b>_ “Armenia is (lit. <b>finds itself</b>) in a vulnerable position”.


### <a name="Cau">`Cau`</a>: causative voice

In Western Armenian, the causative voice is a feature of verbs. In causative constructions, the subject is the entity that causes another participant to perform the action denoted by the base verb. Causatives are generally translated into English using verbs _cause, make, have, let, allow_.

Synthetic causatives are formed with the suffix _-ցն-_/_-cʼn-_. This suffix is quite productive and can be used also for deriving a transitive verb from an intransitive or middle verb. In this case, the resulting verb is analyzed as active (Voice=Act) rather than causative (e.g. _կորցնել_/_korc’nel_ “lose”, _թաքցնել_/_t’ak’c’nel_ “hide”).

Armenian also has a periphrastic causative construction in which the auxiliary _տալ_/_tal_ (in various tenses and moods) combines with the infinitive of the content verb. Only the auxiliary is annotated with `Voice=Cau`; the infinitive retains its own voice annotation.

#### Examples

* _պիտի կարենամ <b>կարդացնել</b>_/_piti karenam <b>kardacʼnel</b>_ “I will be able to make (someone) read”,
* _կը <b>յիշեցնէ</b> մեզի_/ _kë <b>yišecʼnē</b> mezi_ “it reminds us”,
* _ընել <b>տուեր</b> է_/_ënel <b>tower</b> ē_ “he/she has had it done”,
* _իբրեւ ճշմարտութիւն հաւտացնել<b> տալ</b>_/_ibrew č̣šmartowtʼiwn hawtacʼnel<b> tal</b>_ “to make (someone) believe (something) to be true”,
* _<b>հասկնալ</b>_ `Act` _<b>տալ</b>_ `Cau` /_<b>hasknal tal</b>_ “lit: <b>make</b> someone <b>understand</b>”,
* _<b>հասկցնել</b>_ `Cau`/_<b>haskc’nel</b>_ “lit: <b>make</b> someone <b>understand</b>”,
* _<b>հասկցնել</b>_ `Cau` _<b>տալ</b>_ `Cau` /_<b>haskc’nel tal</b>_ “lit: <b>make</b> someone <b>make</b> someone <b>understand</b>”.


### <a name="CauPass">`CauPass`</a>: derived causative: passive forms

The value `CauPass` is reserved for the passive forms of causative verbs. Passive forms of transitive verbs, formed either with the productive suffix  _-ու-/-ow-_, or by replacing the infinitival ending _-ել_/_-el_ with _-իլ_/_-il_, often function as mediopassive (intransitive) verbs. In such cases, the passive form constitutes a distinct lemma, e.g., _մաշել_/_mašel_ “to wear out (trans.)” - _մաշիլ_/_mašil_ “to wear out (intrans.), to become worn”, _հարթել_/_hart’el_ “to smooth” - _հարթիլ_/_hart’il_ “to become smooth”, _հալել_/_halel_ “to melt (trans.)” - _հալիլ_/_halil_ “to melt (intrans.)”. Consequently, to express a true, agentive passive meaning for these verbs, the passive is formed from the corresponding causative verb.

#### Examples

* _Ճինսէ տապատները կը <b>մաշեցուին</b> յատուկ եղանակով_/_Č̣insē tapatnerë kë <b>mašecʼowin</b> yatowk eġanakov_ “denim pants <b>are distressed</b> using a special method”
* _ոսկերչական իրերու <b>հալեցուիլը</b>_/_oskerčakan irerow <b>halecʼowilë</b>_ “the melting down of jewelry”


### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.
The reciprocal is expressed by the passive suffix _-ու-_/_-ow-_. However, the set of verb roots that can form reciprocals is limited.

#### Examples

* _Գաղտնի ու անձայն <b>պսակուեցան</b>_/_Gaġtni ow anjayn <b>psakowecʼan</b>_ “They <b>got married</b> (lit. married each other) secretly and quietly”,
* _պայմանաւորուեցանք_/_paymanaworowecʼankʼ_ “we came to an agreement (with each other)”.
<!-- Interlanguage links updated Út 30. června 2026, 10:59:23 CEST -->
