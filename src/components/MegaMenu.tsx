import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { navGroups, relatedSites } from "@/data/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

interface MegaMenuProps {
  open: boolean;
  onClose: () => void;
}

/** Expands inside the header itself, turning the header bar into the menu surface */
const MegaMenu = ({ open, onClose }: MegaMenuProps) => {
  const { lang, t } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="mega"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden"
        >
          <div className="border-t border-border/60 px-5 sm:px-8 py-6 md:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_18rem] gap-8">
              {/* Affiliated sites — right side in Arabic, left in English */}
              <aside
                className={`lg:border-border/60 ${
                  lang === "ar"
                    ? "lg:order-last lg:border-s lg:ps-8"
                    : "lg:order-first lg:border-e lg:pe-8"
                }`}
              >
                <h3 className="text-sm font-bold text-foreground mb-4">
                  {t("مواقع الجمعية المرتبطة", "Affiliated Websites")}
                </h3>
                <div className="space-y-2">
                  {relatedSites.map((site, i) => (
                    <motion.a
                      key={site.en}
                      href={site.url}
                      onClick={onClose}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 * i }}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-background hover:bg-muted/60 hover:border-primary/40 transition-all p-2.5 group"
                    >
                      <img
                        src={site.logo}
                        alt={t(site.ar, site.en)}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-contain shrink-0 bg-card p-1 ring-1 ring-border"
                      />
                      <div className="flex flex-col leading-tight min-w-0">
                        <span className="text-xs font-bold text-primary truncate">
                          {t(site.ar, site.en)}
                        </span>
                        <span className="text-[10px] text-muted-foreground truncate">
                          {t(site.en, site.ar)}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 ms-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </aside>

              {/* Full site map */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-foreground">
                    {t("خريطة الموقع الكاملة", "Full Site Map")}
                  </h2>
                  <button
                    onClick={onClose}
                    aria-label={t("إغلاق القائمة", "Close menu")}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                  {navGroups.map((group, gi) => (
                    <motion.div
                      key={group.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * gi }}
                    >
                      <h3 className="text-sm font-bold text-primary mb-3 pb-2 border-b border-border">
                        {t(group.ar, group.en)}
                      </h3>
                      <ul className="space-y-1.5">
                        {group.items.map((item) => (
                          <li key={item.path + item.en}>
                            <a
                              href={item.path}
                              onClick={onClose}
                              className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                            >
                              <Arrow className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span>{t(item.ar, item.en)}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
