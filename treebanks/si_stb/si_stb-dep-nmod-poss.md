---
layout: base
title:  'Statistics of nmod:poss in UD_Sinhala-STB'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-STB: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="si_stb-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="si_stb-dep-nmod-tmod.html">nmod:tmod</a></tt>.

11 nodes (1%) are attached to their parents as `nmod:poss`.

11 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45454545454545.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt> (6; 55% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-PRON.html">PRON</a></tt> (4; 36% instances), <tt><a href="si_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_stb-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	ෆොන්සේකා	ෆොන්සේකා	PROPN	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	Translit=fonsēkā|LTranslit=fonsēkā
2	මහතා	මහතා	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3	1	flat	_	Translit=mahatā|LTranslit=mahatā
3	ද	ද	PART	_	AdpType=Post	6	advmod	_	Translit=da|LTranslit=da
4	හමුදාවේ	හමුදාව	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod:poss	_	Translit=hamudāvē|LTranslit=hamudāva
5	සෙබළුන්	සෙබළ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	6	obj	_	Translit=sebaḷun|LTranslit=sebaḷa
6	පාවා	පාව	VERB	_	VerbForm=Part|Voice=Act	0	root	_	Translit=pāvā|LTranslit=pāva
7	දී	දෙ	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Part	6	compound:svc	_	Translit=dī|LTranslit=de
8	තිබේ	තිබ	AUX	_	Tense=Pres|VerbForm=Fin	7	aux	_	Translit=tibē|LTranslit=tiba
9	.	.	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	එදා	එදා	ADV	_	AdvType=Tim	5	obl:tmod	_	Translit=edā|LTranslit=edā
2	ජනතාව	ජනතා	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	Translit=janatāva|LTranslit=janatā
3	සිය	සිය	PRON	_	Poss=Yes|PronType=Prs	4	nmod:poss	_	Translit=siya|LTranslit=siya
4	යුතුකම	යුතුකම	NOUN	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	5	obj	_	Translit=yutukama|LTranslit=yutukama
5	ඉටු	ඉටු	PART	_	_	0	root	_	Translit=iṭu|LTranslit=iṭu
6	කළේ	කර	VERB	_	Tense=Past|VerbForm=Part|Voice=Act	5	compound:lvc	_	Translit=kaḷē|LTranslit=kara
7	ය	ය	PART	_	AdpType=Post	5	dep	_	Translit=ya|LTranslit=ya
8	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	අප	අපි	PRON	_	Poss=Yes|PronType=Prs	3	det:poss	_	Translit=apa|LTranslit=api
2	ගේ	ගේ	PART	_	AdpType=Post	1	case	_	Translit=gē|LTranslit=gē
3	කතාව	කතා	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	Translit=katāva|LTranslit=katā
4	අමෙරිකාවේ	අමෙරිකා	PROPN	_	Animacy=Inan|Case=Gen|Definite=Def|Number=Sing	5	nmod:poss	_	Translit=amerikāvē|LTranslit=amerikā
5	පුරවැසිභාවය	පුරවැසිභාව	NOUN	_	Case=Acc|Definite=Def|Number=Sing	0	root	_	Translit=puravæsibhāvaya|LTranslit=puravæsibhāva
6	ගැන	ගැන	PART	_	AdpType=Post	5	case	_	Translit=gæna|LTranslit=gæna
7	නො	නො	PART	_	AdpType=Prep|Polarity=Neg	8	advmod	_	Translit=no|LTranslit=no
8	වේ	වෙ	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=vē|LTranslit=ve
9	.	.	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


