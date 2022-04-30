---
layout: base
title:  'Statistics of obl:lmod in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="kpv_lattice-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="kpv_lattice-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="kpv_lattice-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="kpv_lattice-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="kpv_lattice-dep-obl-mcl.html">obl:mcl</a></tt>, <tt><a href="kpv_lattice-dep-obl-tmod.html">obl:tmod</a></tt>.

243 nodes (3%) are attached to their parents as `obl:lmod`.

122 instances of `obl:lmod` (50%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.46090534979424.

The following 10 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (216; 89% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (7; 3% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="kpv_lattice-pos-DET.html">DET</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:lmod	color:blue
1	Питер	Питер	PROPN	N	Case=Nom|Number=Sing	4	nsubj	_	OrigLang=ru
2	да	да	CCONJ	CC	_	3	cc	_	OrigLang=ru
3	Мери	Мери	PROPN	N	Case=Nom|Number=Sing	1	conj	_	OrigLang=ru
4	кутчысьлісны	кутчысьлыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
5	да	да	CCONJ	CC	_	6	cc	_	OrigLang=ru
6	петісны	петны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	4	conj	_	_
7	вежӧсысь	вежӧс	NOUN	N	Case=Ela|Number=Sing	6	obl:lmod	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obl:lmod	color:blue
1	Лун	лун	NOUN	N	Case=Nom|Number=Sing	2	nmod	_	_
2	шӧр	шӧр	NOUN	N	Case=Nom|Number=Sing	3	nmod	_	_
3	кадланьыс	кад	NOUN	N	Case=Apr|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl:tmod	_	_
4	нин	нин	ADV	Adv	_	3	advmod:emph	_	_
5	кыськӧ	кысь	ADV	Adv	Case=Ela	7	obl:lmod	_	_
6	шур-шар	шур-шар	ADV	Adv	_	7	advmod	_	_
7	воис	воны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
8	неыджыд	неыджыд	ADJ	A	Case=Nom|Number=Sing|Polarity=Neg	9	amod	_	_
9	тӧвру	тӧвру	NOUN	N	Case=Nom|Number=Sing	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:lmod	color:blue
1	Гортын	горт	NOUN	N	Case=Ine|Number=Sing	3	obl:lmod	_	GTtags=Sg,Ine
2	важ	важ	ADJ	A	Case=Nom|Number=Sing	3	amod	_	GTtags=Sg,Nom
3	газетъяс	газет	NOUN	N	Case=Nom|Number=Plur	0	root	_	GTtags=Pl,Nom
4	эмӧсь	эм	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	3	cop	_	GTtags=Ind,Prs,Pl3|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	унаысь	унаысь	ADV	Adv	NumType=Mult	8	advmod:freq	_	GTtags=Iter
7	сійӧс	сійӧ	PRON	Pron	Case=Acc|Number=Sing|Person=3|PronType=Prs	8	obj	_	GTtags=Pers,Sg3,Acc
8	снимайтлӧмаӧсь	снимайтлыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=1	3	conj	_	GTtags=IV,Ind,Prt2,Pl3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


