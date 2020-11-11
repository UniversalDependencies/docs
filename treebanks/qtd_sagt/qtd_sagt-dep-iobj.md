---
layout: base
title:  'Statistics of iobj in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `iobj`

This relation is universal.

43 nodes (0%) are attached to their parents as `iobj`.

28 instances of `iobj` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.48837209302326.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (31; 72% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (8; 19% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	So	so	ADV	_	_	5	discourse	_	LangID=DE
2	Almanlar'da	Almanlar	NOUN	_	Case=Loc|Number=Sing	5	obl	_	LangID=TR
3	irgendwie	irgendwie	ADV	_	_	5	advmod	_	LangID=DE
4	die	der	PRON	_	Case=Nom|Number=Plur|PronType=Dem	5	nsubj	_	LangID=DE
5	machen	machen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
6	sich	er|es|sie	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	5	iobj	_	LangID=DE
7	da	da	ADV	_	_	5	advmod	_	LangID=DE
8	gar	gar	ADV	_	_	9	advmod	_	LangID=DE
9	keine	kein	PRON	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Neg|PronType=Neg	5	obj	_	LangID=DE
10	so	so	ADV	_	_	5	discourse	_	LangID=DE|SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	Du	du	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	LangID=DE
2	kannst	können	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	aux	_	LangID=DE
3	bisschen	bißchen	ADV	_	_	7	advmod	_	LangID=DE
4	von	von	ADP	_	_	6	case	_	LangID=DE
5	den	der	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	LangID=DE
6	Serien	Serie	NOUN	_	Case=Dat|Gender=Fem|Number=Plur	7	iobj	_	LangID=DE
7	erzählen	erzählen	VERB	_	VerbForm=Inf	0	root	_	LangID=DE|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	LangID=OTHER
9	dizinin	dizi	NOUN	_	Case=Gen|Number=Sing	10	nmod	_	LangID=TR
10	içeriğini	içerik	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	LangID=TR
11	falan	falan	ADV	_	_	10	advmod	_	LangID=TR|SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 iobj	color:blue
1	Ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	LangID=DE
2	muss	müssen	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	reparandum	_	LangID=DE
3	jetzt	jetzt	ADV	_	_	2	advmod	_	LangID=DE
4	wieder	wieder	ADV	_	_	2	advmod	_	LangID=DE
5	zu	zu	ADP	_	_	7	case	_	LangID=DE
6	dem	der	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	LangID=DE
7	Groupon	Groupon	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	2	iobj	_	LangID=DE
8	was--	was	PRON	_	Case=Nom|Number=Sing	10	reparandum	_	LangID=DE
9	konuştuğumuz	konuş	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1|Tense=Past|VerbForm=Part	10	csubj	_	LangID=TR
10	var	var	ADJ	_	_	0	root	_	LangID=TR
11	dı	i	AUX	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	10	cop	_	LangID=TR
12	ya	ya	ADV	_	_	10	advmod	_	LangID=TR
13	hani	hani	ADV	_	_	10	advmod	_	LangID=TR
14	onu	o	PRON	_	Case=Acc|Number=Sing|Person=3	15	obj	_	LangID=TR
15	yapıyorum	yap	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Pres	10	conj	_	LangID=TR
16	şu	şu	DET	_	Definite=Def	17	det	_	LangID=TR
17	an	an	NOUN	_	Case=Nom|Number=Sing	15	obl	_	LangID=TR|SpaceAfter=No
18	.	.	PUNCT	_	_	10	punct	_	LangID=OTHER

~~~


