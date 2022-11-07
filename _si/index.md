---
layout: base
title:  'Sinhala UD'
udver: '2'
---

# UD for Sinhala <span class="flagspan"><img class="flag" src="../../flags/svg/LK.svg" /></span>

STB 2.11 contains 100 sentences taken from various sources.

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. 
* Note: Multiword tokens are not handled in STB 2.11.

## Morphology

### Tags
* XPOS are not used in STB 2.11
* The following UPOS are used in STB 2.11

* VERB
* PUNCT
* PART
* ADJ
* PRON
* AUX
* PROPN
* ADV
* ADP
* DET
* CCONJ
* NUM

## Features

* 11 cases are handled in the STB 2.11:  
* * Abl - e.g. අතින්, ඉන්, ඉරානයෙන්, ඡන්දයෙන්, පිට්ටනියෙන්  
* * Acc - e.g. ඒ, කිරීම, ජනතාව, ප්‍රධානයකු, රට, හැඟීමක්, අදහස, අදහසක්, අදියර, අයවැය 
** Ben - e.g. ජනතාවට 
** Cns - e.g. කොමිස්වලට, ගිවිසුමට, රටට, ලංකාවට
** Dat - e.g. ඊට, ඔහුට, ජනතාවට, අධිපතිවරයාට, අපට, ඔවුනට, දේශප්‍රේමීන්ට, නායකයකුට, පක්ෂයට, බවට 
** Gen - e.g. හමුදාවේ, අමෙරිකාවේ, ආසියාවේ, උපායෙහි, කරගැනීමේ, ක්‍රමයේ, ජාතියේ, මණ්ඩලයේ, ලෝකයේ, වන්නියේ
** Ill - e.g. ආරාමවලට
** Ine - e.g. අත්අඩංගුවේ, කේන්ද්‍රස්ථානයක, ජපානයේ, නගරයේ, ප්‍රදේශවල, මධ්‍යයේ, මෙරට, රාජ්‍යයක, රාජ්‍යයේ, ලිපියක 
** Ins - e.g. ක්‍රමය, කාලයකින්, කිරෙන්, කිහිපයකින්, පරිත්‍යාගයෙන්, ලේඛනයෙනි, වීමෙන් 
** Loc - e.g. එහි, ආසන්නයේ, කලාපයෙකි, තත්ත්වයක, මොහොතේ, වටරවුමේ, විද්‍යාවේ 
** Nom - e.g. ඔහු, ආර්ථික, එය, මහතා, දේශපාලන, අද, ඒ, තත්ත්වය, යුද, අය

## Syntax
The STB 2.11 has the following three types of contructions:

1. with non-complex predicates - 26 constructions
2. with complex predicates - 41 constructions
3. with non-verbal predicates - 33 constructions

The 100 sentences consist the following relations.

* abl
* acl
* advcl
* advmod
* advmod:emph
* advmod:lmod
* amod
* aux
* aux:pass
* case
* cc
* ccomp
* compound
* compound:lvc
* compound:prt
* compound:svc
* conj
* cop
* csubj
* dep
* det
* det:poss
* flat
* flat:name
* mark
* nmod
* nmod:poss
* nmod:tmod
* nsubj
* nummod
* obj
* obl
* obl:lmod
* obl:tmod
* punct
* root
* xcomp

