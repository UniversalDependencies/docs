---
layout: base
title:  'Statistics of nsubj:pass in UD_Sanskrit'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sa-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sa-dep-nsubj-cop.html">nsubj:cop</a></tt>.

36 nodes (2%) are attached to their parents as `nsubj:pass`.

30 instances of `nsubj:pass` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19444444444444.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (20; 56% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (11; 31% instances), <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	देव	देव	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	5	vocative	_	Translit=deva|LTranslit=deva|Gloss=your-majesty
2	द्वादशभिर्	द्वादशभि	NUM	_	Case=Ins|Number=Plur|NumType=Card	3	nummod	_	Translit=dvādaśabhir|LTranslit=dvādaśabhi|Gloss=twelve
3	वर्षैः	वर्ष	NOUN	_	Case=Ins|Gender=Neut|Number=Plur	5	obl	_	Translit=varṣaiḥ|LTranslit=varṣa|Gloss=years
4	व्याकरणम्	व्याकरण	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	5	nsubj:pass	_	Translit=vyākaraṇam|LTranslit=vyākaraṇa|Gloss=grammar
5	श्रूयते	श्रु	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=śrūyate|LTranslit=śru|Gloss=is-studied
6	।	।	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	अथवा	अथवा	ADV	_	_	4	advmod	_	Translit=athavā|LTranslit=athavā|Gloss=after-all
2	साधू	साधु	NOUN	_	Case=Nom|Gender=Masc|Number=Dual	4	obl:agent	_	Translit=sādhū|LTranslit=sādhu|Gloss=sadhus
3	इदम्	इदम्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj:pass	_	Translit=idam|LTranslit=idam|Gloss=this
4	उच्यते	वच्	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=ucyate|LTranslit=vac|Gloss=said
5	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|Gloss=-

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 nsubj:pass	color:blue
1	विष्णुशर्मणा	विष्णुशर्मा	PROPN	_	Case=Ins|Gender=Masc|Number=Sing	4	nsubj	_	Translit=viṣṇuśarmaṇā|LTranslit=viṣṇuśarmā|Gloss=Vishnusharma
2	अपि	अपि	ADV	_	_	16	advmod	_	Translit=api|LTranslit=api|Gloss=also
3	तान्	तद्	DET	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	4	obj	_	Translit=tān|LTranslit=tad|Gloss=them
4	आदाय	आ-दा	VERB	_	VerbForm=Conv	16	advcl	_	Translit=ādāya|LTranslit=ā-dā|Gloss=after-having-taken
5	तत्	तद्	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	det	_	Translit=tat|LTranslit=tad|Gloss=the
6	अर्थम्	अर्थ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	4	obl	_	Translit=artham|LTranslit=artha|Gloss=reason
7	मित्रभेदः	मित्रभेद	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	15	obj	_	Translit=mitrabhedaḥ|LTranslit=mitrabheda|Gloss=Mitra-bheda
8	मित्रप्राप्ति	मित्रप्राप्ति	PROPN	_	Case=Nom|Gender=Neut|Number=Sing	7	conj	_	Translit=mitraprāpti|LTranslit=mitraprāpti|Gloss=Mitra-prapti
9	काकोलूकीयम्	काकोलूकीय	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	7	conj	_	Translit=kākolūkīyam|LTranslit=kākolūkīya|Gloss=Kakolukiya
10	लब्धप्रणाशम्	लब्धप्रणाश	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	7	conj	_	Translit=labdhapraṇāśam|LTranslit=labdhapraṇāśa|Gloss=Labdha-pranashana
11	अपरीक्षितकारकाणि	अपरीक्षितकारक	PROPN	_	Case=Nom|Gender=Neut|Number=Plur	7	conj	_	Translit=aparīkṣitakārakāṇi|LTranslit=aparīkṣitakāraka|Gloss=Aparikshita-karitva
12	च	च	CCONJ	_	_	14	cc	_	Translit=ca|LTranslit=ca|Gloss=and
13	इति	इति	ADV	_	_	14	advmod	_	Translit=iti|LTranslit=iti|Gloss=this-way
14	पञ्चतन्त्राणि	पञ्चतन्त्र	PROPN	_	Case=Nom|Gender=Neut|Number=Plur	7	appos	_	Translit=pañcatantrāṇi|LTranslit=pañcatantra|Gloss=five-essays,Panchatantra
15	रचयित्वा	रच्	VERB	_	VerbForm=Conv	4	conj	_	Translit=racayitvā|LTranslit=rac|Gloss=after-having-composed
16	पाठिताः	पाठिता	ADJ	_	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Cau,Pass	0	root	_	Translit=pāṭhitāḥ|LTranslit=pāṭhitā|Gloss=were-taught
17	ते	तद्	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	18	det	_	Translit=te|LTranslit=tad|Gloss=the
18	राजपुत्राः	राजपुत्र	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	16	nsubj:pass	_	SpaceAfter=No|Translit=rājaputrāḥ|LTranslit=rājaputra|Gloss=princes
19	।	।	PUNCT	_	_	16	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


