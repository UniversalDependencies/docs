---
layout: base
title:  'Syntax'
permalink: no/overview/syntax.html
---

# Syntax

The syntactic annotation in the Norwegian UD treebank conforms to the
UD guidelines, adding language-specific relations for relative clauses (`acl:relcl`)
and verb particles (`compound:prt`). The annotation has been automatically converted to
UD from the original dependency scheme described in Solberg
et. al. (2014) and further described in the NDT guidelines (Kinn
et. al.).
The conversion has not been manually checked. There are a few known discrepancies from UD:

* `remnant` elements in ellipsis are not attached to their correlate
  but rather to the main verb, since information about correct
  correlate is not present in the original annotation
* no `mwe` analysis in the treebank. This is also information that is not present in the original data.

## References

Kari Kinn, Per Erik Solberg and Pål Kristian Eriksen. [NDT Guidelines
for Morphological Annotation](http://www.nb.no/sbfil/dok/20140314_guidelines_ndt_english.pdf)". National Library Tech Report.

Per Erik Solberg, Arne Skjærholt, Lilja Øvrelid, Kristin Hagen and
Janne Bondi Johannessen. 2014. "[The Norwegian Dependency Treebank](http://www.lrec-conf.org/proceedings/lrec2014/pdf/303_Paper.pdf)",
Proceedings of LREC 2014, Reykjavik.
