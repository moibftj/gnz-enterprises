import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import Box from '@cloudscape-design/components/box';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <Box>
      <TopNavigation
        identity={{
          href: '/',
          title: 'GNZ Enterprises',
          onFollow: (e) => {
            e.preventDefault();
            navigate('/');
          },
          logo: {
            src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMDA2Q0UwIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5HTlo8L3RleHQ+Cjwvc3ZnPg==',
            alt: 'GNZ Enterprises Logo'
          }
        }}
        utilities={[
          {
            type: 'menu-dropdown',
            text: 'Menu',
            items: [
              { id: 'home', text: 'Home', href: '/' },
              { id: 'services', text: 'Services', href: '/services' },
              { id: 'about', text: 'About', href: '/about' },
              { id: 'blog', text: 'Blog', href: '/blog/' }
            ],
            onItemClick: (e) => {
              e.preventDefault();
              if (e.detail.id === 'home') navigate('/');
              if (e.detail.id === 'services') navigate('/services');
              if (e.detail.id === 'about') navigate('/about');
              if (e.detail.id === 'blog') window.location.href = '/blog/';
            }
          },
          {
            type: 'button',
            text: 'Contact Us',
            onClick: () => navigate('/contact'),
            variant: 'primary-button'
          }
        ]}
        i18nStrings={{
          searchIconAriaLabel: 'Search',
          searchDismissIconAriaLabel: 'Close search',
          overflowMenuTriggerText: 'More',
          overflowMenuTitleText: 'All',
          overflowMenuBackIconAriaLabel: 'Back',
          overflowMenuDismissIconAriaLabel: 'Close menu'
        }}
      />
      <Box>{children}</Box>
      <Box padding={{ top: 'xl', bottom: 'xl', horizontal: 'xxl' }} textAlign="center">
        <Box variant="small" color="text-status-inactive">
          <a href="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '24px' }}>Home</a>
          <a href="/services" style={{ color: 'inherit', textDecoration: 'none', marginRight: '24px' }}>Services</a>
          <a href="/about" style={{ color: 'inherit', textDecoration: 'none', marginRight: '24px' }}>About</a>
          <a href="/blog/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '24px' }}>Blog</a>
          <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </Box>
        <Box variant="small" color="text-status-inactive" padding={{ top: 's' }}>
          {'©'} {new Date().getFullYear()} GNZ Enterprises. All rights reserved.
        </Box>
      </Box>
    </Box>
  );
}
