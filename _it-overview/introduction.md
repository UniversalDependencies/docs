---
layout: base
title:  'Introduction'
permalink: it/overview/introduction.html
---

# Introduction

The Italian corpus annotated according to the UD annotation scheme was obtained by conversion from ISDT (Italian Stanford Dependency Treebank), released for the dependency parsing shared task of Evalita-2014 (Bosco et al. 2014).

ISDT is a resource annotated according to the Stanford dependencies scheme (de Marneffe et al. 2008, 2013a, 2013b, 2014), obtained through a semi-automatic conversion process starting from MIDT (the Merged Italian Dependency Treebank).
MIDT in turn was obtained merging two existing Italian treebanks, differing both in corpus composition and adopted annotation schemes: 

* TUT, the Turin University Treebank (Bosco et al. 2000)
* ISST-TANL, first released as ISST-CoNLL for the CoNLL-2007 shared task (Montemagni, Simi 2007).

The details of the harmonization and conversion process leading to MIDT were discussed in (Bosco, Montemagni, Simi, 2012). 
The Stanford annotation scheme, obtained from an enriched version of MIDT,
was adapted to the specificity of the Italian language. 
We refer to (Bosco, Montemagni, Simi, 2013 and 2014) for a discussion. 

The final conversion step, leading to UD, is in progress. A first preliminary release was issued in January 2015.

## Corpus composition

<table>
<tr style="background-color: #eee"><th>Original format</th><th>Source</th><th>Genre</th><th>Size in tokens</th><th>Size in sentences</th>
</tr>
<tr><td>TUT-CONLL</td><td>Evalita 2011 Dependency parsing</td><td>Legal texts, news articles, Wikipedia articles</td><td>97,558</td><td>3,842</td></tr>
<tr><td>ISST-TANL</td><td>Evalita 2011 Domain adaptation task</td><td>Newspaper articles</td><td>80,990</td><td>4,136</td></tr>
<tr><td>ISST-TANL</td><td>SPLeT 2012 </td><td>Legal texts: European directives</td><td>5,922</td><td>260</td></tr>
<tr><td>MIDT</td><td>Several QA competitions</td><td>Questions</td><td>21,968</td><td>2,228</td></tr>
<tr><td>MIDT</td><td>Evalita 2014 Dependency parsing:test data set (partial)</td><td>News articles</td><td>7,386</td><td>304</td></tr>
<tr><td></td><td></td><td>TOTAL</td><td><b>213,829</b></td><td><b>10,770</b></td></tr>
</table>


## Acknowledgments

We wish to thank all of the contributors to the original annotation efforts, as well as the supporting organizations, i.e. the Institute for Computational Linguistics "A. Zampolli", the University of Pisa, and the University of Torino.

## References

* Cristina Bosco, Vincenzo Lombardo, Leonardo Lesmo, Daniela Vassallo. 2000.
	[Building a treebank for italian: a data-driven annotation](http://www.di.unito.it/~bosco/publicat/lrec00.zip)
	schema. In *Proceedings of LREC 2000*, Athens, Greece.

* Cristina Bosco, Simonetta Montemagni, Maria Simi. 2012. [Harmonization and Merging of two Italian Dependency Treebanks, Workshop on Merging of Language Resources](http://www.lrec-conf.org/proceedings/lrec2012/workshops/06.LREC%202012%20Merging%20Proceedings.pdf), in *Proceedings of LREC 2012*, Workshop on Language Resource Merging, Instanbul, May 2012, ELRA, pp. 23-30.

* Cristina Bosco, Simonetta Montemagni, Maria Simi. 2013. [Converting Italian Treebanks: Towards an Italian Stanford Dependency Treebank](http://acl.eldoc.ub.rug.nl/mirror/W/W13/W13-2308.pdf). In *Proceedings of the 7th Linguistic Annotation Workshop & Interoperability with Discourse* (LAW VII & ID at ACL-2013), Sofia, Bulgaria, August 8-9, pp. 61-69.

* Cristina Bosco, Felice Dell’Orletta, Simonetta Montemagni, Manuela Sanguinetti, Maria Simi. 2014.
	[The Evalita 2014 Dependency Parsing task](http://clic.humnet.unipi.it/proceedings/Proceedings-EVALITA-2014.pdf), *CLiC-it 2014 and EVALITA 2014 Proceedings*, 
	Pisa University Press, ISBN/EAN: 978-886741-472-7, pp. 1-8.
	
* Marie-Catherine de Marneffe and Christopher D. Manning. 2008. 
  [The Stanford typed dependencies representation](http://nlp.stanford.edu/pubs/dependencies-coling08.pdf). 
  In *COLING Workshop on Cross-framework and Cross-domain Parser Evaluation*.

* Marie-Catherine de Marneffe, Miriam Connor, Natalia Silveira, Bowman S. R., Timothy Dozat, Christopher D. Manning. 2013. [More constructions, more genres: Extending Stanford Dependencies](https://www.aclweb.org/anthology/W/W13/W13-37.pdf), *Proc. of the Second International Conference on Dependency Linguistics* (DepLing 2013), Prague, August 27–30, Charles University in Prague, Matfyzpress, Prague, pp. 187–196.
  
* Marie-Catherine de Marneffe and Christopher D. Manning. 2013. [Stanford typed dependencies manual](http://nlp.stanford.edu/software/dependencies_manual.pdf), 
	September 2008, Revised for the Stanford Parser v. 3.3 in December 2013. 

* Marie-Catherine de Marneffe, Timothy Dozat, Natalia Silveira, Katri
  Haverinen, Filip Ginter, Joakim Nivre, Christopher Manning. 2014.
  [Universal Stanford Dependencies: A cross-linguistic typology](http://nlp.stanford.edu/pubs/USD_LREC14_paper_camera_ready.pdf).
  In *Proceedings of LREC 2014*.
  
* Simonetta Montemagni, Maria Simi. 2007. [The Italian dependency annotated corpus developed for the CoNLL–2007 shared task](http://medialab.di.unipi.it/isst/). Technical report, ILC–CNR.

* Maria Simi, Cristina Bosco, Simonetta Montemagni. 2014. [Less is More? Towards a Reduced Inventory of Categories for Training a Parser for the Italian Stanford Dependencies](http://www.lrec-conf.org/proceedings/lrec2014/summaries/818.html). 2014. In *Proceedings of LREC 2014*, ELRA, pp. 83–90.




