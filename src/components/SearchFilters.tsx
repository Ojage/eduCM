import React, { Fragment, useEffect, useMemo, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Search as SearchIcon, Filter, X, Check, ChevronsUpDown } from "lucide-react";
import {
  SearchFilters as SearchFiltersType,
  EducationLevel,
  OwnershipType,
} from "../types/school";
import { useLocationData } from "../hooks/useLocationData";

/**
 * Utility: join class names safely
 */
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: Partial<SearchFiltersType>) => void;
  onClearFilters: () => void;
  totalResults: number;
  isSearchFocused: boolean;
  setIsSearchFocused: (focused: boolean) => void;
}

/**
 * Generic Listbox-based select for string values
 */
type SelectOption = { value: string; label: string };

interface SelectBoxProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
  placeholder: string;
  disabled?: boolean;
  ringClass?: string;
  "data-testid"?: string;
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  ringClass = "focus:ring-green-600",
  ...rest
}) => {
  const currentLabel =
    value ? options.find((o) => o.value === value)?.label ?? value : placeholder;

  return (
    <div className="w-full" {...rest}>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>

      <Listbox value={value} onChange={onChange} disabled={disabled}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button
              className={cx(
                "w-full rounded-xl border border-gray-300 px-3 py-2 text-left outline-none transition-all",
                disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "",
                !disabled ? `focus:ring-2 ${ringClass} focus:border-transparent` : ""
              )}
            >
              <span className={cx("block truncate", !value ? "text-gray-500" : "")}>
                {currentLabel}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <ChevronsUpDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            {/* IMPORTANT: let Headless UI control visibility */}
            <Transition
              as={Fragment}
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Listbox.Options
                className={cx(
                  "absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-1",
                  "shadow-lg ring-1 ring-black/5 focus:outline-none"
                )}
              >
                {/* “All …” sentinel */}
                <Listbox.Option
                  key="__all__"
                  value=""
                  className={({ active }) =>
                    cx(
                      "relative cursor-default select-none py-2 pl-3 pr-9",
                      active ? "bg-gray-50 text-gray-900" : "text-gray-700"
                    )
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={cx("block truncate", selected ? "font-medium" : "font-normal")}>
                        {placeholder}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 right-3 flex items-center">
                          <Check className="h-4 w-4" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>

                {options.map((opt) => (
                  <Listbox.Option
                    key={opt.value}
                    value={opt.value}
                    className={({ active }) =>
                      cx(
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                        active ? "bg-gray-50 text-gray-900" : "text-gray-700"
                      )
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span className={cx("block truncate", selected ? "font-medium" : "font-normal")}>
                          {opt.label}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 right-3 flex items-center">
                            <Check className="h-4 w-4" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};

/**
 * Headless UI refactor of the SearchFilters component.
 * - Listbox for all selects
 * - Transition for initial slide/fade-in
 * - Preserves external props and onChange contracts
 */
const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters,
  totalResults,
  isSearchFocused,
  setIsSearchFocused,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const {
    regions,
    selectedRegion,
    setSelectedRegion,
    selectedDivision,
    setSelectedDivision,
    availableDivisions,
    availableTowns,
  } = useLocationData();

  // autofocus behavior retained
  useEffect(() => {
    if (isSearchFocused && searchInputRef.current) {
      searchInputRef.current.focus();
      setIsSearchFocused(false);
    }
  }, [isSearchFocused, setIsSearchFocused]);

  // Option builders (memoized for stability & perf)
  const educationOptions = useMemo<SelectOption[]>(
    () =>
      (Object.values(EducationLevel).filter((v) => typeof v === "string") as string[]).map(
        (level) => ({ value: level, label: level })
      ),
    []
  );

  const ownershipOptions = useMemo<SelectOption[]>(
    () =>
      (Object.values(OwnershipType).filter((v) => typeof v === "string") as string[]).map(
        (own) => ({ value: own, label: own })
      ),
    []
  );

  const regionOptions = useMemo<SelectOption[]>(
    () => regions.map((r) => ({ value: r.name, label: r.name })),
    [regions]
  );

  const divisionOptions = useMemo<SelectOption[]>(
    () => availableDivisions.map((d) => ({ value: d.name, label: d.name })),
    [availableDivisions]
  );

  const townOptions = useMemo<SelectOption[]>(
    () => availableTowns.map((t) => ({ value: t, label: t })),
    [availableTowns]
  );

  const hasActiveFilters =
    !!filters.query ||
    !!filters.level ||
    !!filters.ownership ||
    !!filters.region ||
    !!filters.division ||
    !!filters.town;

  // Handlers preserve previously established cascading rules
  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setSelectedDivision("");
    onFiltersChange({ region, division: "", town: "" });
  };

  const handleDivisionChange = (division: string) => {
    setSelectedDivision(division);
    onFiltersChange({ division, town: "" });
  };

  return (
    <Transition
      appear
      show
      enter="transition ease-out duration-300"
      enterFrom="-translate-y-8 opacity-0"
      enterTo="translate-y-0 opacity-100"
    >
      <div className="bg-white border-b border-gray-200 sticky top-[8rem] z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          {/* 🔍 Search Bar */}
          <div className="relative mb-6">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search schools, programs, or locations..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
              value={filters.query}
              onChange={(e) => onFiltersChange({ query: e.target.value })}
              aria-label="Search"
            />
          </div>

          {/* 🎯 Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-4">
            {/* Education Level */}
            <SelectBox
              label="Education Level"
              value={filters.level ?? ""}
              onChange={(v) => onFiltersChange({ level: (v as SearchFiltersType["level"]) || "" })}
              options={educationOptions}
              placeholder="All Levels"
              ringClass="focus:ring-green-600"
              data-testid="select-level"
            />

            {/* Ownership */}
            <SelectBox
              label="Ownership"
              value={filters.ownership ?? ""}
              onChange={(v) =>
                onFiltersChange({ ownership: (v as SearchFiltersType["ownership"]) || "" })
              }
              options={ownershipOptions}
              placeholder="All Types"
              ringClass="focus:ring-red-600"
              data-testid="select-ownership"
            />

            {/* Region */}
            <SelectBox
              label="Region"
              value={selectedRegion ?? ""}
              onChange={handleRegionChange}
              options={regionOptions}
              placeholder="All Regions"
              ringClass="focus:ring-yellow-500"
              data-testid="select-region"
            />

            {/* Division */}
            <SelectBox
              label="Division"
              value={selectedDivision ?? ""}
              onChange={handleDivisionChange}
              options={divisionOptions}
              placeholder="All Divisions"
              disabled={!selectedRegion}
              ringClass="focus:ring-yellow-500"
              data-testid="select-division"
            />

            {/* Town */}
            <SelectBox
              label="Town"
              value={filters.town ?? ""}
              onChange={(v) => onFiltersChange({ town: v })}
              options={townOptions}
              placeholder="All Towns"
              disabled={!selectedDivision}
              ringClass="focus:ring-green-600"
              data-testid="select-town"
            />

            {/* Clear Filters */}
            <div className="flex items-end">
              <button
                onClick={onClearFilters}
                disabled={!hasActiveFilters}
                className={cx(
                  "w-full rounded-xl px-4 py-2 flex items-center justify-center space-x-2 transition-colors",
                  "text-gray-700",
                  hasActiveFilters
                    ? "bg-gray-100 hover:bg-gray-200"
                    : "bg-gray-50 text-gray-400 cursor-not-allowed"
                )}
                aria-label="Clear filters"
              >
                <X className="h-4 w-4" />
                <span className="text-sm">Clear</span>
              </button>
            </div>
          </div>

          {/* 📊 Results Count */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-green-700" />
              <span className="font-medium">
                {totalResults} school{totalResults !== 1 ? "s" : ""} found
                {hasActiveFilters && " (filtered)"}
              </span>
            </div>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Show all schools
              </button>
            )}
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default SearchFilters;
