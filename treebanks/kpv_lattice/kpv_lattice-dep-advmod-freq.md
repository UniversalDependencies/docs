---
layout: base
title:  'Statistics of advmod:freq in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advmod:freq`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advmod.html">advmod</a></tt>.
There are also 11 other language-specific subtypes of `advmod`: <tt><a href="kpv_lattice-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="kpv_lattice-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="kpv_lattice-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="kpv_lattice-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="kpv_lattice-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="kpv_lattice-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="kpv_lattice-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="kpv_lattice-dep-advmod-tmod.html">advmod:tmod</a></tt>.

14 nodes (0%) are attached to their parents as `advmod:freq`.

13 instances of `advmod:freq` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `advmod:freq`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (11; 79% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advmod:freq	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod:freq	color:blue
1	Найӧ	сійӧ	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj:cop	_	GTtags=Pers,Pl3,Nom
2	век	век	ADV	Adv	_	4	advmod:freq	_	_
3	вӧліны	вӧвны	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=1	4	cop	_	GTtags=IV,Ind,Prt1,Pl3
4	радӧсь	рад	ADJ	A	Number[subj]=Plur	0	root	_	GTtags=Cop,Pl
5	сыкӧд	сійӧ	PRON	Pron	Case=Com|Number=Sing|Person=3|PronType=Prs	6	obl	_	GTtags=Pers,Sg3,Com
6	сёрнитыштны	сёрнитыштны	VERB	V	Valency=1|VerbForm=Inf	4	advcl	_	GTtags=IV,Inf|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	сералыштны	сералыштны	VERB	V	Valency=1|VerbForm=Inf	6	conj	_	GTtags=IV,Inf
9	прӧст	прӧст·кад	NOUN	N	Case=Ill|Number=Sing	10	nmod	_	GTtags=Sg,Ill
10	кадӧ	_	NOUN	N	_	8	obl	_	SpaceAfter=No
11	,	,	PUNCT	CLB	_	12	punct	_	_
12	сьывны	сьывны	VERB	V	Valency=2|VerbForm=Inf	6	conj	_	GTtags=TV,Inf
13	ассьыныс	ас	PRON	Pron	Case=Ela|Number=Plur|Person=3|PronType=Prs|Reflex=Yes	15	nmod:poss	_	GTtags=Refl,Pl3,Ela
14	фабричнӧй	фабричнӧй	ADJ	A	_	15	amod	_	_
15	частушкаяс	частушка	NOUN	N	Case=Nom|Number=Plur	12	obj	_	GTtags=Pl,Nom|SpaceAfter=No
16	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:freq	color:blue
1	Сӧмын	сӧмын	ADV	Adv	_	6	advmod:foc	_	_
2	енэжын	енэж	NOUN	N	Case=Ine|Number=Sing	3	obl:lmod	_	GTtags=Sg,Ine
3	дзирдалысь	дзирдавны	VERB	V	Derivation=NomAg|Valency=1	4	acl	_	GTtags=IV,Der,Der/ысь,ActPrsPtc
4	кодзувъяс	кодзув	NOUN	N	Case=Nom|Number=Plur	6	nsubj:cop	_	GTtags=Pl,Nom
5	век	век	ADV	Adv	_	6	advmod:freq	_	_
6	ӧтылнаынӧсь	ӧтылнаынӧсь	ADV	Adv	Case=Ine|Number[subj]=Plur	0	root	_	GTtags=Ine,Cop,Pl
7	да	да	CCONJ	CC	_	8	cc	_	_
8	читкырасьӧны	читкырасьны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres	6	conj	_	GTtags=Refl,Ind,Prs,Pl3|SpaceAfter=No
9	,	,	PUNCT	CLB	_	11	punct	_	_
10	быттьӧ	быттьӧ	SCONJ	CS	_	11	mark	_	_
11	кӧсйӧны	кӧсйыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Valency=2	6	conj	_	GTtags=TV,Ind,Prs,Pl3
12	шуны	шуны	VERB	V	Valency=2|VerbForm=Inf	11	xcomp	_	GTtags=TV,Inf|SpaceAfter=No
13	:	:	PUNCT	CLB	_	6	punct	_	_

~~~


