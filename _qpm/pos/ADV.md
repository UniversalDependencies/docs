---
layout: postag
title: 'ADV'
shortdef: 'adverb'
udver: '2'
---
## ADV

### Definition

In Pomak there are words that typically modify [verbs](VERB.md) for such categories as time, place, direction or manner. They may also modify 
[adjectives](ADJ.md) and other adverbs, as in *<b>játse húbbe</b>* (very well) or *<b>fazlá bóržo</b>* (more quickly).

There is a closed subclass of *pronominal adverbs* that refer to circumstances in context, rather than naming them directly;
 similarly to pronouns, these can be categorized as interrogative, relative, demonstrative etc. Pronominal adverbs also get the 
 [ADV](ADV.md) part-of-speech tag but they are differentiated by additional features.

#### Examples

* Demonstrative adverbs:
    -*itúzi* "here - the speaker - proximal", *itúka* "there - the listener - medial", *itám / inám* "over there - far away - distal"
    - *isǽ / isǽna / isægána* "now", *itagáne* "then - in the past", *inagáne* "then - in the future"
    -*isýj* "like this - the speaker - proximal", *itýj* "like this - listener - medial", *inýj* "like that - a third party - distal"
* Interrogative adverbs:
    - *kugá* "when"
    - *kadé* "where"
    - *kak* "how"
    - *kólko* "how much"
* Relative adverbs:
    - *kugása* "now that - present", *kugáta* "then that - past", *kugána* "then that - future"
    - *kadésa* "here where - speaker - proximal", *kadéta* "there where - listener - medial", *kadéna* "over there where - far away - distal"
    - *káksa* "how I/we- as I/me - speaker - proximal", *kákta* "how you - as you - listener - medial", *kákna* "how he/she/it/they - a third party - distal"
    - *kólkoso* "so much as I/we - speaker - proximal", *kólkoto* "so much as you - listener - medial", *kólkono* "so much as he/she/it/them - a third party -distal"
* Many indefinite, negative and total adverbs are formed with the particles *nǽ / nó, ní, sǽ* proceeding the interogative adverb as a separate word:
    * Indefinite adverbs:
        - *nǽ kugá* "sometime - no matter when"
        - *nǽ kadé* "somewhere - no matter where"
        - *nǽ kak* "somehow - no matter how"
        - *nó kugá* "sometime - unknown when"
        - *nó kadé* "somewhere - unknown where" 
        - *nó kak* "somehow - unknown how" 
        - *nó kólko* "several - unknown how much" 
    * Negative adverbs:   
        - *ní kugá* "never"
        - *ní kadé* "nowhere"
        - *ní kak* "no way"
        - *ní kólko* "not at all"
    * Total adverbs:
        - *sǽ kugá* "always"
        - *sǽ kadé* "everywhere"
        - *sǽ kak* "anyway"
* Adverbs of manner:
    - *huzlý "strongly", usúlna / usulétna "lightly, ajá / aváška / javáška "slowly", bóržo "quickly", húbbe "good", kámatne "nicely"* 
	
    Adverbs of manner are also derived from several verbs such as: *varveštǘn (vórvem)* "walking", *surneštǘn (súrnom)* "crowling", *baraštǘn (bárom)* "groping", *plačeštǘn (pláčem)* "crying", *fyrkaštǘn (fýrkom)* "running", *smešeštǘn (smøm so)* "laughing"	
	
	- *atsóde / atsám, atsýj* "towards here, towards there"
    - *nacýj, nasám* "here and there"
    - *adgóre / addól* "upwards / downwards"
    - *nagóre / nadól* "upwards / downwards"
    - *blíze / duléče* "near / far"
    - *nísce / visóce* "low / high"
    - *atpréš / adzád* "front / back"    	                                          
    - *varhú* "over (something)"
* Adverbs of time:
    - *fčéra, dnéska / búgün, útre* "yesterday / today / tomorrow"
    - *laní, búsenæ, dagodíno* "last year, this year, next year"
    - *pórne, sétne / azám* "before, after / later"
* Other adverbs:
    - Indefinite:
        - *annóš* "once, sometime"
        - *bannóš* "sometime / several times"
        - *ínak* "otherwise"
        - *drúgade* "elsewise"
    - Total:
        - *dájma, vse, óla, vrit, le* "always / all the time / continuously"

Note that there are words that may be traditionally called numerals in some languages but they are treated as adverbs in the universal tagging scheme. In particular, *adverbial ordinal numerals* are tagged as [ADV](ADV.md).

- *pórvo / birinǧí* "first / initially / in the beginning / in the first phase"
- *ikinǧí* "secondly / in the second phase"

Several numeral adverbs are registered as [ADV]()

#### Examples

- *mlógo* "a lot /much"
- *málko / mífko* "a little"
- *játse* "very"
- *gajét* "much"
- *fazlá* "more"

Multiplicative numerals that are registered as [ADV]()

#### Examples

- *annóš* "one time, once"
- *dvaš* "two times, twice"
- *triš* "three times"
- *čétriš* "four times"

About the diminutives of the following adverbs (*húbbefce [húbbe]* "so and so", *duléčko [duléče]* "a little far") see the category [DegreeModQpm](../feat/DegreeModQpm.md).

The comparative and superlative degree of adverbs is formed with the adverbs  _po_ and _naj_ respectively: they both are distinct words.   Τhe feature [Degree](feat/Degree.md) is used to denote the positive, comparative and superlative degre of adverbs and is assigned one of the values  `Pos`, `Cmp` και `Sup` respectively. Only the comparative and the superlative degree have been declared so far while the positive degree is treated as the default.
 
<!-- Interlanguage links updated Ne 5. května 2024, 18:19:34 CEST -->
