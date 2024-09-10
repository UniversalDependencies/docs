---
layout: base
title:  'Statistics of obl:agent in UD_Classical_Armenian-CAVaL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Armenian-CAVaL: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="xcl_caval-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="xcl_caval-dep-obl-arg.html">obl:arg</a></tt>.

55 nodes (0%) are attached to their parents as `obl:agent`.

53 instances of `obl:agent` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.47272727272727.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt> (29; 53% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PRON.html">PRON</a></tt> (15; 27% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PROPN.html">PROPN</a></tt> (6; 11% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="xcl_caval-pos-ADJ.html">ADJ</a></tt>-<tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obl:agent	color:blue
1	Յայնժամ	յայնժամ	ADV	_	_	2	advmod	_	Translit=Yaynžam|LTranslit=yaynžam|Gloss=then
2	վարեցաւ	վարեմ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=varecʻaw|LTranslit=varem|Gloss=conduct
3	Յիսուս	Յիսուս	PROPN	_	Case=Nom|Number=Sing	2	nsubj:pass	_	Translit=Yisows|LTranslit=Yisows|Gloss=Jesus
4	յ	ի	ADP	_	_	5	case	_	SpaceAfter=No|Translit=y|LTranslit=i|LId=ի-1|Gloss=to
5	անապատ	անապատ	ADJ	_	Case=Acc|Number=Sing	2	obl	_	Translit=anapat|LTranslit=anapat|LId=անապատ-1|Gloss=deserted
6	ի	ի	ADP	_	_	7	case	_	Translit=i|LTranslit=i|LId=ի-3|Gloss=from
7	հոգւոյ	հոգի	NOUN	_	Case=Abl|Number=Sing	2	obl:agent	_	SpaceAfter=No|Translit=hogwoy|LTranslit=hogi|Gloss=soul
8	ն	ն	DET	_	Definite=Def|Deixis=Remt|PronType=Dem	7	det	_	SpaceAfter=No|Translit=n|LTranslit=n|Gloss=that
9	՝	՝	PUNCT	_	_	10	punct	_	Translit=;|LTranslit=;
10	փորձել	փորձեմ	VERB	_	VerbForm=Inf	2	xcomp	_	Translit=pʻorjel|LTranslit=pʻorjem|Gloss=try
11	ի	ի	ADP	_	_	12	case	_	Translit=i|LTranslit=i|LId=ի-3|Gloss=from
12	սատանայէ	սատանայ	PROPN	_	Case=Abl|Number=Sing	10	obl:agent	_	SpaceAfter=No|Translit=satanayē|LTranslit=satanay|Gloss=devil
13	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:agent	color:blue
1	եւ	եւ	CCONJ	_	_	3	cc	_	Translit=ew|LTranslit=ew|Gloss=and
2	նա	նա	PRON	_	Case=Nom|Deixis=Remt|Number=Sing|PronType=Dem	3	nsubj	_	Translit=na|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
3	ուսուցանէր	ուսուցանեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Translit=owsowcʻanēr|LTranslit=owsowcʻanem|Gloss=teach
4	ի	ի	ADP	_	_	5	case	_	Translit=i|LTranslit=i|LId=ի-2|Gloss=in
5	ժողովուրդս	ժողովուրդ	NOUN	_	Case=Loc|Number=Plur	3	obl	_	Translit=žołovowrds|LTranslit=žołovowrd|Gloss=people
6	նոցա	նա	PRON	_	Case=Gen|Deixis=Remt|Number=Plur|PronType=Dem	5	nmod	_	SpaceAfter=No|Translit=nocʻa|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
7	.	.	PUNCT	_	_	8	punct	_	Translit=:|LTranslit=:
8	փառաւորեալ	փառաւորեմ	VERB	_	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	3	advcl	_	Translit=pʻaṙaworeal|LTranslit=pʻaṙaworem|Gloss=glorify
9	յ	ի	ADP	_	_	10	case	_	SpaceAfter=No|Translit=y|LTranslit=i|LId=ի-3|Gloss=from
10	ամենեցունց	ամենեքեան	PRON	_	Case=Abl|Number=Plur|PronType=Tot	8	obl:agent	_	SpaceAfter=No|Translit=amenecʻowncʻ|LTranslit=amenekʻean|Gloss=all
11	:	:	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl:agent	color:blue
1	Յայնժամ	յայնժամ	ADV	_	_	2	advmod	_	Translit=Yaynžam|LTranslit=yaynžam|Gloss=then
2	վարեցաւ	վարեմ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=varecʻaw|LTranslit=varem|Gloss=conduct
3	Յիսուս	Յիսուս	PROPN	_	Case=Nom|Number=Sing	2	nsubj:pass	_	Translit=Yisows|LTranslit=Yisows|Gloss=Jesus
4	յ	ի	ADP	_	_	5	case	_	SpaceAfter=No|Translit=y|LTranslit=i|LId=ի-1|Gloss=to
5	անապատ	անապատ	ADJ	_	Case=Acc|Number=Sing	2	obl	_	Translit=anapat|LTranslit=anapat|LId=անապատ-1|Gloss=deserted
6	ի	ի	ADP	_	_	7	case	_	Translit=i|LTranslit=i|LId=ի-3|Gloss=from
7	հոգւոյ	հոգի	NOUN	_	Case=Abl|Number=Sing	2	obl:agent	_	SpaceAfter=No|Translit=hogwoy|LTranslit=hogi|Gloss=soul
8	ն	ն	DET	_	Definite=Def|Deixis=Remt|PronType=Dem	7	det	_	SpaceAfter=No|Translit=n|LTranslit=n|Gloss=that
9	՝	՝	PUNCT	_	_	10	punct	_	Translit=;|LTranslit=;
10	փորձել	փորձեմ	VERB	_	VerbForm=Inf	2	xcomp	_	Translit=pʻorjel|LTranslit=pʻorjem|Gloss=try
11	ի	ի	ADP	_	_	12	case	_	Translit=i|LTranslit=i|LId=ի-3|Gloss=from
12	սատանայէ	սատանայ	PROPN	_	Case=Abl|Number=Sing	10	obl:agent	_	SpaceAfter=No|Translit=satanayē|LTranslit=satanay|Gloss=devil
13	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


