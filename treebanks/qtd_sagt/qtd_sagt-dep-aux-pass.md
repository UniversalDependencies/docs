---
layout: base
title:  'Statistics of aux:pass in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="qtd_sagt-dep-aux-q.html">aux:q</a></tt>.

13 nodes (0%) are attached to their parents as `aux:pass`.

7 instances of `aux:pass` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84615384615385.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (12; 92% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 aux:pass	color:blue
1	Und	und	CCONJ	_	_	3	cc	_	LangID=DE
2	die	der	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	3	nsubj	_	LangID=DE
3	schreiben	schreiben	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
4	selber	selber	ADV	_	_	3	advmod	_	LangID=DE
5	so	so	ADV	_	_	3	advmod	_	LangID=DE|SpaceAfter=No
6	:	:	PUNCT	_	_	8	punct	_	LangID=OTHER
7	"	"	PUNCT	_	_	8	punct	_	LangID=OTHER|SpaceAfter=No
8	ifşalandık	ifşalan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=1|Tense=Past	3	parataxis	_	LangID=TR|SpaceAfter=No
9	"	"	PUNCT	_	_	8	punct	_	LangID=OTHER|SpaceAfter=No
10	,	,	PUNCT	_	_	14	punct	_	LangID=OTHER
11	so	so	ADV	_	_	14	advmod	_	LangID=DE
12	wir	wir	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	14	nsubj	_	LangID=DE
13	werden	werden	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	14	aux:pass	_	LangID=DE
14	geoutet	outen	VERB	_	VerbForm=Part	8	parataxis:trans	_	LangID=DE
15	ne	ne	INTJ	_	_	14	discourse	_	LangID=DE|SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 aux:pass	color:blue
1	Aber	aber	CCONJ	_	_	3	cc	_	LangID=DE
2	ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	LangID=DE
3	stelle	stellen	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
4	mir	ich	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	3	expl:pv	_	LangID=DE
5	manchmal	manchmal	ADV	_	_	3	advmod	_	LangID=DE
6	die	der	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	LangID=DE
7	Frage	Frage	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	LangID=DE|SpaceAfter=No
8	,	,	PUNCT	_	_	17	punct	_	LangID=OTHER
9	acaba	acaba	ADV	_	_	17	advmod	_	LangID=TR
10	aslında	aslında	ADV	_	_	17	advmod	_	LangID=TR
11	bugün	bugün	NOUN	_	_	13	obl	_	LangID=TR
12	kü	kü	ADP	_	Case=Nom|Number=Sing	11	case	_	LangID=TR
13	olduğumuz	ol	VERB	_	Number=Sing|Tense=Past|VerbForm=Part	14	acl	_	LangID=TR
14	yerde	yer	NOUN	_	Case=Loc|Number=Sing	17	obl	_	LangID=TR
15	hätten	haben	AUX	_	Mood=Sub|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	17	aux	_	LangID=DE
16	wir	wir	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	17	nsubj	_	LangID=DE
17	weiter	weiter	ADJ	_	_	7	ccomp	_	LangID=DE
18	sein	sein	AUX	_	VerbForm=Inf	17	aux:pass	_	LangID=DE
19	sollen	sollen	AUX	_	VerbForm=Inf	17	aux	_	LangID=DE
20	mit	mit	ADP	_	_	22	case	_	LangID=DE
21	der	der	DET	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	LangID=DE
22	Technik	Technik	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	17	iobj	_	LangID=DE|SpaceAfter=No
23	?	?	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


