---
layout: base
title:  'Statistics of obl:cau in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:cau`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="mdf_jr-dep-obl-freq.html">obl:freq</a></tt>, <tt><a href="mdf_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="mdf_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="mdf_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

7 nodes (0%) are attached to their parents as `obl:cau`.

4 instances of `obl:cau` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.57142857142857.

The following 4 pairs of parts of speech are connected with `obl:cau`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:cau	color:blue
1	Кивок	кивок	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	3	nsubj	_	GTtags=Indef,Sg,Nom
2	изь	аф	AUX	_	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	3	aux:neg	_	GTtags=Aux,Neg,Ind,Prt1,ScSg3
3	карма	кармамс	VERB	_	Connegative=Yes	0	root	_	GTtags=ConNeg
4	пичедема	пичедемс	VERB	V	Case=Loc|VerbForm=Inf	3	xcomp	_	GTtags=Inf,Loc
5	колбатнень	колба	NOUN	N	Case=Gen|Definite=Def|Number=Plur	4	obl:cau	_	GTtags=Pl,Gen,Def
6	инкса	инкса	ADP	Adp	Case=Cau	5	case	_	GTtags=Cau|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:cau	color:blue
1	Сондейнза	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Long	0	root	_	GTtags=Pers,Sg3,Dat,Long
2	визькс	визькс	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	1	nsubj	_	GTtags=Sg,Nom,Indef
3	Пашуть	Пашу	NOUN	N	Case=Gen|Definite=Def|Number=Sing	1	obl:cau	_	GTtags=Prop,Sg,Gen,Def
4	инкса	инкса	ADP	Adp	Case=Cau	3	case	_	GTtags=Cau|SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:cau	color:blue
1	Сянь	ся	PRON	Pron	Case=Gen|Definite=Ind|Number=Sing|PronType=Dem	4	obl:cau	_	GTtags=Dem,Sg,Gen,Indef
2	эзда	эзда	ADP	Adp	Case=Abl	1	case	_	GTtags=Abl
3	Маринкати	Маринка	NOUN	N	Case=Dat|Definite=Def|Number=Sing	4	obl	_	GTtags=Prop,Sg,Dat,Def
4	арась	арамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3
5	визькс	визькс	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


