---
layout: base
title:  'Statistics of advmod in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="hy_bsut-dep-advmod-emph.html">advmod:emph</a></tt>.

97 nodes (3%) are attached to their parents as `advmod`.

90 instances of `advmod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.37113402061856.

The following 9 pairs of parts of speech are connected with `advmod`: <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt> (66; 68% instances), <tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt> (14; 14% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt> (10; 10% instances), <tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-DET.html">DET</a></tt>-<tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-NUM.html">NUM</a></tt>-<tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	Հետո	հետո	ADV	_	_	2	advmod	_	Translit=Heto|LTranslit=heto
2	դադարում	դադարել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=dadarowm|LTranslit=dadarel
3	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	Translit=en|LTranslit=em
4	հավատալ	հավատալ	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	2	xcomp	_	Translit=havatal|LTranslit=havatal|SpaceAfter=No
5	:	:	PUNCT	_	Foreign=Yes	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod	color:blue
1	Հայաստանում	Հայաստան	PROPN	_	Animacy=Nhum|Case=Loc|Definite=Ind|NameType=Geo|Number=Sing	8	obl	_	Translit=Hayastanowm|LTranslit=Hayastan
2	օրեցօր	օրեցօր	ADV	_	_	3	advmod	_	Translit=òrec’òr|LTranslit=òrec’òr
3	ավելի	ավելի	ADV	_	Degree=Cmp	6	advmod	_	Translit=aveli|LTranslit=aveli
4	ու	ու	CCONJ	_	_	5	cc	_	Translit=ow|LTranslit=ow
5	ավելի	ավելի	ADV	_	Degree=Cmp	3	compound:redup	_	Translit=aveli|LTranslit=aveli
6	հաճախ	հաճախ	ADV	_	Degree=Pos	8	advmod	_	Translit=hač̣ax|LTranslit=hač̣ax
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	Translit=ē|LTranslit=em
8	հնչում	հնչել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=hnčowm|LTranslit=hnčel
9	այն	այն	DET	_	Deixis=Remt|PronType=Dem	10	det	_	Translit=ayn|LTranslit=ayn
10	միտքը	միտք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	8	nsubj	_	Translit=mitk’ë|LTranslit=mitk’|SpaceAfter=No
11	,	,	PUNCT	_	_	16	punct	_	Translit=,|LTranslit=,
12	թե	թե	SCONJ	_	_	16	mark	_	Translit=t’e|LTranslit=t’e
13	մեզ	մենք	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	16	obj	_	Translit=mez|LTranslit=menk’
14	միայն	միայն	ADV	_	_	15	advmod:emph	_	Translit=miayn|LTranslit=miayn
15	իշխանափոխությունը	իշխանափոխություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	16	nsubj	_	Translit=išxanap’oxowt’yownë|LTranslit=išxanap’oxowt’yown
16	կփրկի	փրկել	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	10	acl	_	Translit=kp’rki|LTranslit=p’rkel|SpaceAfter=No
17	։	։	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Սակայն	սակայն	CCONJ	_	_	5	cc	_	Translit=Sakayn|LTranslit=sakayn
2	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	3	det	_	Translit=ayd|LTranslit=ayd
3	այցերը	այց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	5	nsubj	_	Translit=ayc’erë|LTranslit=ayc’
4	միշտ	միշտ	ADV	_	_	5	advmod	_	Translit=mišt|LTranslit=mišt
5	պաշտոնական	պաշտոնական	ADJ	_	_	0	root	_	Translit=paštonakan|LTranslit=paštonakan
6	էին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	5	cop	_	Translit=ēin|LTranslit=em|SpaceAfter=No
7	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
8	իրավասության	իրավասություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	13	nmod:poss	_	Translit=iravasowt’yan|LTranslit=iravasowt’yown
9	և	և	CCONJ	_	_	12	cc	_	Translit=ew|LTranslit=ew
10	ազգի	ազգ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	11	nmod:poss	_	Translit=azgi|LTranslit=azg
11	ինքնորոշման	ինքնորոշում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	12	nmod:poss	_	Translit=ink’norošman|LTranslit=ink’norošowm
12	իրավունքի	իրավունք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	8	conj	_	Translit=iravownk’i|LTranslit=iravownk’
13	ճանաչմամբ	ճանաչում	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	5	obl	_	Translit=č̣anačmamb|LTranslit=č̣anačowm|SpaceAfter=No
14	։	։	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.

~~~


