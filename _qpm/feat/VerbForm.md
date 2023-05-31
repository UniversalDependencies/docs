---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

## VerbForm

Even though the name of the feature seems to suggest that it is used exclusively with [verbs](../../u/pos/VERB), it is not the case. 
Some verb forms in some languages actually form a gray zone between verbs and other parts of speech ([nouns](../../u/pos/NOUN), 
[adjectives](../../u/pos/ADJ) and [adverbs](../../u/pos/ADV)). For instance, participles may be either classified as verbs or as adjectives, 
depending on language and context. In both cases `VerbForm=Part` may be used to separate them from other verb forms or other types of adjectives.

Pomak has both finite verb forms  and non-finite ones. Non-finite verb forms include the participles, the (residual)infinitive and the converbs.


### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](Mood.html), it is finite.


#### Examples

* _vremǿso <b>je</b> óblačno_ "the weather is cloudy"  
* _navón <b>letí</b> snæg_ "it is snowing outside" 
* _še <b>dójdeš</b> li da mí <b>pamógneš</b>?_ "will you come to help me?" 
* _denése <b>so</b> bóržo <b>pamínot</b>_ "the days go by quickly" 
* _<b>valésavyj</b> da na <b>pánneš</b>_ "be careful so you do not fall"  

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form that shares properties of verbs and adjectives.

In Pomak, participles are always tagged as 'Tense=Past' and they may be active or passive ones. A further division classifies them by 
their aspectual properties into perfective and imperfective ones. 

<!--Οι μετοχές στην Πομακική μπορούν χωριστούν σε δύο γενικές κατηγορίες: τις ενεργητικές παρελθοντικές μετοχές (active) 
και τις παθητικές παρελθοντικές μετοχές (passive).
Κάθε γενική κατηγορία μπορεί να διαιρεθεί με βάση τη ρηματική όψη σε εξακολουθητικές (past imperfective) και συνοπτικές (past perfective) μετοχές.-->

#### Examples

#### Examples

<b> Active participles:</b>

Imperfective participles: `Aspect=Imp|Voice=Act`

- *kázaval (kázavom)* "he was saying, he was narrating" 
- *atkáraval (atkáravom)* "he was going, he was carrying" 
- *písaval (písavom)* "he was writing" 
- *danásel (danásem)* "he was bringing" 
- *prevádal (prevádom)* "he was sending" 
- *dával (dávom)* "he was giving" 

Perfective participles: `Aspect=Perf|Voice=Act`

- *kázal (kážom)* "he said, he narrated"  
- *atkáral (ótkarom)* "he went, he carried" 
- *písal (píšom)* "he wrote" 
- *danél (dónesom)* "he brought" 
- *prevódil (prévadem)* "he sent" 
- *dal (dam)* "he gave" 

<b>Passive participles: </b>

Imperfective participles: `Aspect=Imp|Voice=Pass`

- *kázavan (kázavom)* "said continuously" 
- *atkáravan (atkáravom)* "carried continuously" 
- *písavan (písavom)* "written continuously" 
- *danásen (danásem)* "brought continuously" 
- *prevádan (prevádom)* "sent continuously" 
- *dávan (dávom)* "given continuously" 

Perfective participles:  `Aspect=Perf|Voice=Pass`

- *kázan (kážom)* "said once" 
- *atkáran (ótkarom)* "carried once" 
- *písan (píšom)* "written once" 
- *danésen (dónesom)* "brought once"
- *prevóden (prévadem)* "sent once"  
- *dáden (dam)* "given once"  


### <a name="Conv">`Conv`</a>: converb

The converb, also called adverbial participle, is a non-finite verb form that shares properties of verbs and adverbs. 
It appears e.g. in Slavic and Indo-Aryan languages.

In Pomak it is related only to imperfective verb forms.

#### Examples

- *patrǿsna mí só <b>sedǿva</b> (sédom)* "I am bored of sitting around" 
- *zabalǽho nu nagýse <b>varvǿva</b> (vórvem)* "our feet are sore from walking" 
- *skócaho só <b>smǿva</b> (smøm so)* "they burst out in laughter" 
- *ačíne ji so atékaly <b>plákava</b> (pláčem)* "her eyes are swollen from crying"
- *umaríh só mestá <b>méreva</b> (mérem)* "I am tired of measuring fields" 


### <a name="Inf">`Inf`</a>: infinitive

Infinitives of Pomak have an imperfective and  a perfective form and  a range of usages that are exemplified below. Among others, the infinitive forms 
the detering imperative [Imperative]() when it appears after the particle *namój / namójte* "not".

#### Examples


-  *ne mí só je <b>rabatí</b> naštése, alá trǽbava* "I do not want / like working at night, but I have to"  
- *za tébe šom <b>attí</b> / <b>do</b> dur da Atíno* "for your sake I would go / come to Athens" 
- *<b>padjó</b> ti, májko, vaz drúman, <b>pytá</b> ti, májko drúmniceh* "you will go uphill, mama, you will be asking, mama, the people passing by (folk song)" 
- *<b>račí</b> / <b>mog</b> li ti da mí zǿmeš annók hlǽba at fyrýnane?* "would you accept / could you buy me a bread from the bakery?" 
- Detering imperative: *namój <b>barzá</b>, še da fpréme* "do not rush, we shall arrive" 

A very special type of Pomamk infinitives is related to a small number of imperfective verbs. These infinitives are repeated to form bilects that 
 denote the continuous/monotonous/rythmic repetition of a motion, activity etc. 


#### Examples

- *čúktiti čúktiti (čúkom)* "hit and hit" 
- *lǘštiti lǘštiti (lǘllem)* "swing and swing" 
- *vórttiti vórttiti (vórtem)* "turn and turn" 
- *séktiti séktiti (séčem)* "strike and strike (with an axe)" 
<!-- Interlanguage links updated Út 9. května 2023, 20:03:51 CEST -->
