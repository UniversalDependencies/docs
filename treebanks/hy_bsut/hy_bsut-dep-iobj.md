---
layout: base
title:  'Statistics of iobj in UD_Armenian-BSUT'
udver: '2'
---

## Treebank Statistics: UD_Armenian-BSUT: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="hy_bsut-dep-iobj-agent.html">iobj:agent</a></tt>.

176 nodes (0%) are attached to their parents as `iobj`.

109 instances of `iobj` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 8 pairs of parts of speech are connected with `iobj`: <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (105; 60% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-PRON.html">PRON</a></tt> (45; 26% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-PROPN.html">PROPN</a></tt> (19; 11% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="hy_bsut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-ADP.html">ADP</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_bsut-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_bsut-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 iobj	color:blue
1	Ոչ	ոչ	PART	_	ExtPos=CCONJ|Polarity=Neg	4	cc	_	Translit=Oč|LTranslit=oč
2	՛	՛	PUNCT	_	_	1	punct	_	Translit=՛|LTranslit=՛
3	փակ	փակ	ADJ	_	Degree=Pos	4	amod	_	Translit=p’ak|LTranslit=p’ak
4	պատուհանը	պատուհան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	Translit=patowhanë|LTranslit=patowhan
5	փրկեց	փրկել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=p’rkec’|LTranslit=p’rkel|SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
7	ոչ	ոչ	PART	_	ExtPos=CCONJ|Polarity=Neg	11	cc	_	Translit=oč|LTranslit=oč
8	՛	՛	PUNCT	_	_	7	punct	_	Translit=՛|LTranslit=՛
9	ճակատին	ճակատ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	10	iobj	_	Translit=č̣akatin|LTranslit=č̣akat
10	կապված	կապել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	11	acl	_	Translit=kapvaç|LTranslit=kapel
11	շապիկը	շապիկ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	conj	_	Translit=šapikë|LTranslit=šapik|SpaceAfter=No
12	:	:	PUNCT	_	Foreign=Yes	5	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 iobj	color:blue
1	Պետք	պետք	AUX	_	Mood=Nec|Polarity=Pos	3	aux	_	Translit=Petk’|LTranslit=petk’
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=ē|LTranslit=em
3	խոսենք	խոսել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=1|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	Translit=xosenk’|LTranslit=xosel|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	Translit=,|LTranslit=,
5	համոզենք	համոզել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	Translit=hamozenk’|LTranslit=hamozel
6	իրար	իրար	PRON	_	Case=Dat|Number=Plur|PronType=Rcp	5	iobj	_	Translit=irar|LTranslit=irar|SpaceAfter=No
7	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
8	եթե	եթե	SCONJ	_	_	13	mark	_	Translit=et’e|LTranslit=et’e
9	անգամ	անգամ	ADV	_	_	13	advmod	_	Translit=angam|LTranslit=angam
10	դա	դա	PRON	_	Case=Nom|Deixis=Med|Number=Sing|PronType=Dem	13	nsubj	_	Translit=da|LTranslit=da
11	անհնար	անհնար	ADJ	_	Degree=Pos	13	xcomp	_	Translit=anhnar|LTranslit=anhnar
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	13	aux	_	Translit=ē|LTranslit=em
13	թվում	թվալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	3	advcl	_	Translit=t’vowm|LTranslit=t’val|SpaceAfter=No
14	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Սկզբում	սկզբում	ADV	_	Degree=Pos	3	advmod	_	Translit=Skzbowm|LTranslit=skzbowm
2	Նվարդին	Նվարդ	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	3	iobj	_	Translit=Nvardin|LTranslit=Nvard
3	թվաց	թվալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	Translit=t’vac’|LTranslit=t’val|SpaceAfter=No
4	՝	՝	PUNCT	_	_	9	punct	_	Translit=,|LTranslit=,
5	հայ	հայ	INTJ	_	_	9	discourse	_	Translit=hay|LTranslit=hay|SpaceAfter=No
6	-	-	PUNCT	_	_	7	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
7	հայա	հայա	INTJ	_	Echo=Ech	5	compound:redup	_	Translit=haya|LTranslit=haya
8	ուշքը	ուշք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	9	compound:lvc	_	Translit=owšk’ë|LTranslit=owšk’
9	կգնա	գնալ	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	3	xcomp	_	Translit=kgna|LTranslit=gnal|SpaceAfter=No
10	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


