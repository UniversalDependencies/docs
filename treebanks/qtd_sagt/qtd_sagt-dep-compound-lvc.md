---
layout: base
title:  'Statistics of compound:lvc in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="qtd_sagt-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="qtd_sagt-dep-compound-redup.html">compound:redup</a></tt>.

94 nodes (0%) are attached to their parents as `compound:lvc`.

94 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04255319148936.

The following 3 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (71; 76% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (17; 18% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (6; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:lvc	color:blue
1	İş--	işte	ADV	_	_	7	reparandum	_	LangID=TR|CorrectForm=İşte
2	bu	bu	DET	_	Definite=Def	3	det	_	LangID=TR
3	havada	hava	NOUN	_	Case=Loc|Number=Sing	7	obl	_	LangID=TR
4	da	de	ADV	_	_	3	advmod:emph	_	LangID=TR
5	nasıl	nasıl	ADV	_	_	7	advmod	_	LangID=TR
6	lernen	lernen	VERB	_	VerbForm=Inf	7	compound:lvc	_	LangID=DE
7	edeceğimi	et	VERB	_	Aspect=Perf|Case=Acc|Evident=Fh|Mood=Ind|Number=Sing|Number[psor]=Sing|Person[psor]=1|Tense=Fut	8	ccomp	_	LangID=TR
8	bilmiyorum	bil	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	0	root	_	LangID=TR|SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound:lvc	color:blue
1	Mh	mh	INTJ	_	_	4	discourse	_	LangID=DE
2	und	und	CCONJ	_	_	4	cc	_	LangID=DE
3	ko--	kochen	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres	4	reparandum	_	LangID=DE|CorrectForm=kochst
4	kochst	kochen	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	LangID=DE
5	du	du	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	LangID=DE
6	auch	auch	ADV	_	_	4	advmod	_	LangID=DE
7	gerne	gerne	ADV	_	_	4	advmod	_	LangID=DE
8	kendin	kendi	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	11	nsubj	_	LangID=TR
9	de	de	ADV	_	_	8	advmod:emph	_	LangID=TR
10	şey	şey	NOUN	_	Case=Nom|Number=Sing	11	compound:lvc	_	LangID=TR
11	yapıyor	yap	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	parataxis	_	LangID=TR
12	musun	mi	AUX	_	Number=Sing|Person=2	11	aux:q	_	LangID=TR|SpaceAfter=No
13	?	?	PUNCT	_	_	4	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound:lvc	color:blue
1	Ja	ja	INTJ	_	_	4	discourse	_	LangID=DE
2	burası	bura	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	LangID=TR
3	kadın	kadın	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	LangID=TR
4	bölümü	bölüm	NOUN	_	Case=Acc|Number=Sing	0	root	_	LangID=TR
5	bazı	bazı	DET	_	_	6	det	_	LangID=TR
6	hanımlar	hanım	NOUN	_	Case=Nom|Number=Plur	8	nsubj	_	LangID=TR
7	rahatsız	rahatsız	ADJ	_	_	8	compound:lvc	_	LangID=TR
8	oluyor	olu	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	parataxis	_	LangID=TR|SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	LangID=OTHER

~~~


