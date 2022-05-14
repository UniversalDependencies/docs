---
layout: postag
title: 'DET'
shortdef: 'determiner'
udver: '2'
---

## DET

### Definition

Determiners are words that modify [nouns](NOUN.md) or noun phrases and express the reference of the noun phrase in context. That is, 
a determiner may indicate whether the noun is referring to a definite or indefinite element of a class, to a closer or more distant element, 
to an element belonging to a specified person or thing, to a particular number or quantity, etc.

In Pomak the triple post-positioned definite article is part of the word, thus it is not considered a determiner.

The tag [PRON]() is assigned to the strong and week personal pronouns, the week types of possessive pronouns and the reflexive pronous
 _sá/sé/só_ and _sí_. All the other words that have been considered as pronouns traditionally are assigned the tag [DET](DET.md):

#### Examples

- possessive determiners: _moj_ "my", _tvoj_ "your", _vášy déti som ne vídeval pa itúzi_ "I did not see your children around here" 
- demonstrative determiners (`PronType=Dem`):

    - _isazí / itazí / inazí_ "this" "this one here - proximal / this one there -medial / that one over there - distal" as in _fčéra paračíh <b>isózek</b> tomofíle_ "yesterday I ordered <b>this</b> car here"
	    - _isakvózen / itakvózen / inakvózen_ "such" "this kind of - proximal / that kind of - medial / any kind in general of - distal" , _isakvýzne ameníje li íšteš da tí kúpem?_ "[is it]this kind of shoes you want me to buy you?" 
- interrogative determiners  when followed by a noun (`PronType=Int`):
    - _kakvóv_ "what kind", _kakvý drípy íšteš da sí kupóvaš?_ "what kind of clothes you want to buy [for yourself]?" 
    - _kutrí_ "who" "which", _kutrók telifóna sí izbrá?_ "which phone did you choose [for yourself]?" 
    - _kólko_ "how much/many", _kólko parý zímaš faf mesecáne?_ "how much money to you get/ earn per month?" 
    - _kač_ , e.g. _kač kiší_ "how many people", _kač kiší ste faf kóštono?_ "how many people are you at home?" 
- relative determiners (`PronType=Rel`):
    - _kakvóvsa_ / _kakvóvta_ / _kakvóvna_ "such as here - proximal / such as there - medial / such as over there - distal" "whatever here - proximal / whatever there -medial / whatever over there - distal", _kakvána telifóna íšteš inakvázne še tí kúpem_  "whatever telephone you ask [for], I shall buy it for you" 
    - _kutrísa / kutríta / kutrína_ "whoever / whatever" "whoever here - proximal /whoever there - medial / whoever over there - distal" "the very same here - proximal / the very same there - medial / the very same over there - distal", _faf kutrókte déne pánna gulǽmyjet snæg nýje só fátihme faf séloto_ "whatever / the very same day it snowed a lot, we were caught (trapped) at the village" 
    - _kólkoso / kólkoto / kólkono_ "as much as here - proximal / as much as there - medial / as much as over there - distal", "whatever here - proximal / whatever there -medial / whatever over there - distal" _kólkoto parý imǽh pahárčih gi_ "as much as / whatever money  I had, I spent it" 
    - _žýjes / žýjet / žýjen_ "the one here who... - proximal/ the one there who... - medial / the one over there who... - distal" "this... here who  - proximal / this.... there  - medial /- this... over there who -distal" , _žýne póteve so adbáveny, trǽbava da so nagadǿt_ " those streets that are ruined,they should be repaired" 
 
- indefinite determiners (`PronType=Ind`) :
    - _nǽ kakvóv_ "of some kind / quality - no matter what", _še íma nǽ kakvá kǽre - na móza da je prez kǽre_ "he must have some kind of a profit (I do not care what) - it cannot be without a profit" 
    - _nó kakvóv_ "of some kind / quality - no matter what", _nó kakvá kitápe ištǽšo da sí kupóva, alá na znom nájda li go_ "he wanted to buy some kind of a book (unknown to me), but I do not know if he found it" 
    - _nó kutrí_ "someone", _nó kutrí čulǽk mú je kázal za tébe, če predávaš húbava méda_ "someone (unknown to me) told him about you, that you sell good / nice honey"  
    - _nó kólko_ "quite some" "several" "many", _nó kólko godíny sétne só je vórnal nah sélono_ "many years later he returned to (the) village" 
    - _nó kač_ "a number of"  "several", e.g., _nó kač kiší_ "a number of people", _nó kač bin kiší so astánali prez rábato_ "several thousands of people have been left without (a) job" 
    - _badín_ "someone" "some person", _kugána badín čulǽk na zno nǽko, pó húbbe je da pýta_ "when someone / some person does not know something, it is better to ask" 
    - _adín / edín / idín_ "a", _adín nov tüǧárin kupóva balkáncka méda_ "a new merchant is buying mountain honey" 
    - _mlógo_ "a lot of" "many" _mlógo darvá goríme zimóse_ "a lot of wood we burn in winter" - "we burn a lot of wood during winter" 
    - _málko / mífko_ "a little" "a few", _málko tütǘne predádahme laní_ "a little tobacco we sold last year" - "last year we sold a few of our tobacco" 
    - _mlózi / mlozína_ "many" "a lot of", _mlózi lenǧepére sprǽho da rábatøt tütǘne_ "a lot of farmers stopped growing tobacco
    - _malmína_ "few" "a few" , _malmína mládi astánaho faf séloso_ "few young stayed at the village" - "a few young people are left at the village" 
    - _drug_ "other" "another", _drugá rábata je inázi, za žóno tí kázavom ja_ - "it is another job the one I am telling you about" [lit."another is this job about the one I am telling you"] 
    - _ínakvov_ "different" "another kind of", _ínakvo rábato íštom da sí nájdom_ "a different job I want to find" [lit. "another kind of job I want to find"] 
    - _nǽko_ "some" "any", _da si ne vídeval nǽko kúče pa itúzi?_ "perhaps you have seen some dog around here?" 

- collective determiners (`PronType=Tot`) :
    - _sǽ kakvóv_ "of all types" "of all kinds" , _na pazárene só predáva sǽ kakvóv zarzavát_ "at the farmer's-market all kinds of vegetable are sold" 
    - _sǽ kutrí_ "everybody" "everyone" "every", _sǽ kutró sélo sí íma mečíte_ "every village has its school" 
    - _vrit_ "all" "every" "the whole of" 
        * _vrit rábatono je toj právi_ "he does all the job (alone)' [lit."all the job, he does it - he does all the job (alone)"]
        * _faf Nedéle so vrit dukǽnovene zatvóreny_ "on Sundays all shops are closed" - "on Sundays every shop is closed" 
        * _vrit selása só pláčet za vódo_ "all vilages suffer from water shortage" 
    - _vrítsi_ "all"
        * _vrítsi stárise zímot naj málko 300 evró ajlýka faf mesecáne_ "all elderly people get less than 300 euros as a pension per month" 
    - _sǽko_  "every" 
        * _sǽko lǽto hódime na denízene_ "every summer we go to the sea" 
        * _sǽko čulǽk sí je sas kysmétene_ "every person is with his luck / fate" - "every man has his own luck /fate" 
        * _sǽko žaná trǽbava da go zno isazí_ "every woman should know this"  

- negative determiners (`PronType=Neg`):
    - _ní kakvóv_ "of no kind / sort / quality", _ní kakvá rábata mú só na pagáda_ "no kind of job is of his preference" - "no kind of job does suit him" - "he does not like any kind of job" - "no kind of job suits him" 
    - _ní kutrí_ "nobody" "no one" "none" "no...", _ní kutrí pot je ne císten skóra_ "none street has been cleaned recently" - "no street has been cleaned recently" 
    - _ní kólko_ "not at all" "no one" "none" "any", _ní kólko parý na pahárčih pa pot_ "I did not spend any money on the way" 
    - _ní kač_ "nobody" as in _ní kač kiší_ "nobody", _ad žǽhte attídaho na Alamánje ní kač kiší só na vórnaho - vrítsi sí kúpiho kóšte i astánaho itám_ "of all  those (people) who went to Germany, nobody came back - they all bought houses and stayed there" 


Most of Pomak determiners inflect for <code>Gender</code>, <code>Number</code> and <code>Case</code>. 

* GENDER
    * _kutrí_ "who.Masc", _kutrá_ "who.Fem", _kutró_ "which.Neut"
    * _badín_ "someone.Masc", _banná_ "someone.Fem", _bannó_ "something.Neut"
    * _adín_ "a.Masc", _anná_ ".Fem", _annó_ "a.Neut"
* CASE
    * _kutrí (Nom)_, _kutrómu (Gen)_, _kutrók (Acc)_
    * _badín_ (Nom), _bannómu (Gen)_, _bannók (Acc)_
    * _adín (Nom)_, _annómu (Gen)_, _annók (Acc)_
* NUMBER
    * _kutrí / ktrómu_ "who.Sg / whose.Sg", _kutrí / kutrǽm_ "who.Pl / whose.Pl"
    * _badín_ "someone.Masc.Sg", _banní_ "some people.Masc.Pl"
    * _adín_ "a.Masc.Sg", _anní_ "some.Masc.Pl"

The following determiners do not inflect .
* _kólko (kólkoso/kólkoto/kólkono)_ "as much as"
* _mlógo (mlógoso/mlógoto/mlógono)_ "much"
* _málko (málkoso/málkoto/málkono)_ "little"
* _mífko (mífkoso/mífkoto/mífkono)_ "little"
* _kač_ "how much"
* _nǽko_ "something"
* _sǽko_ "every"
* _vrit_ "all"
<!-- Interlanguage links updated So kvě 14 19:01:48 CEST 2022 -->
