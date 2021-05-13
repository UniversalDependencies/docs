---
layout: base
title:  'Statistics of compound:redup in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="qtd_sagt-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="qtd_sagt-dep-compound-prt.html">compound:prt</a></tt>.

48 nodes (0%) are attached to their parents as `compound:redup`.

29 instances of `compound:redup` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04166666666667.

The following 9 pairs of parts of speech are connected with `compound:redup`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (13; 27% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (9; 19% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (9; 19% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (8; 17% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (4; 8% instances), <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (2; 4% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-X.html">X</a></tt>-<tt><a href="qtd_sagt-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:redup	color:blue
1	Ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	LangID=TR
2	Amazon'da	Amazon	PROPN	_	Case=Loc|Number=Sing	6	obl	_	CSPoint=Amazon§'da|DeCase=Dat|LangID=MIXED
3	sayfalardan	sayfa	NOUN	_	Case=Abl|Number=Plur	4	nmod	_	LangID=TR
4	sayfaya	sayfa	NOUN	_	Case=Dat|Number=Sing	6	obl	_	LangID=TR
5	atlaya	atla	VERB	_	VerbForm=Conv	6	compound:redup	_	LangID=TR
6	atlaya	atla	VERB	_	VerbForm=Conv	7	advcl	_	LangID=TR
7	buluyorum	bul	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	LangID=TR|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:redup	color:blue
1	Çok	çok	ADV	_	_	2	advmod	_	LangID=TR
2	güzel	güzel	ADJ	_	_	3	advmod	_	LangID=TR
3	konuşuyor	konuş	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	LangID=TR
4	einfach	einfach	ADJ	_	_	7	advmod	_	LangID=DE
5	richtig	richtig	ADJ	_	_	6	compound:redup	_	LangID=DE
6	richtig	richtig	ADJ	_	_	7	advmod	_	LangID=DE
7	gut	gut	ADJ	_	_	3	parataxis:trans	_	LangID=DE|SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:redup	color:blue
1	Çok	çok	DET	_	_	2	det	_	LangID=TR
2	efsane	efsane	NOUN	_	Case=Nom|Number=Sing	3	xcomp	_	LangID=TR
3	olmuş	ol	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	LangID=TR
4	ya	ya	INTJ	_	_	3	discourse	_	LangID=TR
5	Batman	Batman	PROPN	_	Foreign=Yes	8	nsubj	_	LangID=LANG3
6	pizza	pizza	NOUN	_	Case=Nom|Number=Sing	8	obj	_	LangID=TR
7	mizza	pizza	NOUN	_	Case=Nom|Number=Sing|Typo=Yes	6	compound:redup	_	LangID=TR|CorrectForm=pizza
8	yiyor	ye	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	parataxis	_	LangID=TR
9	schon	schon	ADV	_	_	10	advmod	_	LangID=DE
10	cool	cool	ADJ	_	_	8	conj	_	LangID=DE|SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


